#!/usr/bin/python3
'''
    This is our users module.
'''
import models
from api.v1.views import app_views
from flask import jsonify, request, abort


def get_method(id):
    '''
        This is our get method.
    '''
    if id is None:
        emptylist = []
        for user in models.storage.all("User").values():
            emptylist.append(user.to_dict())
        return emptylist
    else:
        user = models.storage.get("User", id)
        if user is None:
            return None
        return user.to_dict()


def post_method(body):
    '''
        This is our post method.
    '''
    new_user = models.classes["User"]()
    for k, v in body.items():
        setattr(new_user, k, v)
    models.storage.new(new_user)
    models.storage.save()
    return new_user.to_dict()


def put_method(id, body):
    '''
        This is our put method.
    '''
    old_user = models.storage.get("User", id)
    if old_user is None:
        return None
    for k, v in body.items():
        setattr(old_user, k, v)
    models.storage.save()
    return old_user.to_dict()


def delete_method(id):
    '''
        This is our delete method.
    '''
    old_user = models.storage.get("User", id)
    if old_user is None:
        return None
    models.storage.delete(old_user)
    models.storage.save()
    return {}


@app_views.route('/users/', methods=['POST', 'GET'])
@app_views.route('/users/<id>', methods=['GET', 'PUT', 'DELETE'])
def users_main(id=None):
    '''
        This will ...
    '''
    if request.method == 'GET':
        result = get_method(id)
        if result is None:
            abort(404)
        return jsonify(result)

    elif request.method == 'POST':
        require = ["username", "password", "first_name", "last_name"]
        if not request.json:
            abort(400, "Not a JSON")
        for req in require:
            if req not in request.json:
                abort(400, "Missing required input: {}".format(req))
        body = request.get_json()
        result = post_method(body)
        return jsonify(result), 201

    elif request.method == 'PUT':
        if not request.json:
            abort(400, "Not a JSON")
        if "name" not in request.json:
            abort(400, "Missing name")
        body = request.get_json()
        result = put_method(id, body)
        if result is None:
            abort(404)
        return jsonify(result), 200
    elif request.method == 'DELETE':
        result = delete_method(id)
        if result is None:
            abort(404)
        return jsonify(result), 200
    else:
        pass
