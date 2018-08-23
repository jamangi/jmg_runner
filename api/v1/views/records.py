#!/usr/bin/python3
'''
    This is our records module.
'''
import models
from api.v1.views import app_views
from flask import jsonify, request, abort


def get_method_user(user_id=None):
    '''
        This is our get method.
    '''
    if user_id is None:
        return None
    else:
        user = models.storage.get("User", user_id)
        if user is None:
            return None
        records = [x.to_dict() for x in user.records]
        if len(records) == 0:
            return None
        return records


def get_method_record(record_id=None):
    '''
        This is our get method for record.
    '''
    if record_id is None:
        return None
    else:
        record = models.storage.get("Record", record_id)
        if record is None:
            return None
        return record.to_dict()


def post_method(user_id, body):
    '''
        This is our post method.
    '''
    old_user = get_method_user(user_id)
    if old_user is None:
        return None
    new_record = models.classes["Record"]()
    setattr(new_record, "user_id", user_id)
    for k, v in body.items():
        setattr(new_record, k, v)
    models.storage.new(new_record)
    models.storage.save()
    return new_record.to_dict()


def put_method(record_id, body):
    '''
        This is our put method.
    '''
    blacklist = ["id", "user_id", "created_at", "updated_at"]
    old_record = models.storage.get("Record", record_id)
    if old_record is None:
        return None
    for k, v in body.items():
        if k not in blacklist:
            setattr(old_record, k, v)
    models.storage.save()
    return old_record.to_dict()


def delete_method(record_id):
    '''
        This is our delete method.
    '''
    old_record = models.storage.get("Record", record_id)
    if old_record is None:
        return None
    models.storage.delete(old_record)
    models.storage.save()
    return {}


@app_views.route('/records/<record_id>', methods=['PUT', 'DELETE', 'GET'])
@app_views.route('/users/<user_id>/records', methods=['POST', 'GET'])
def records_main(record_id=None, user_id=None):
    '''
        This will recieve a request for records and response accordingly
    '''

    if request.method == 'GET':
        if user_id:
            result = get_method_user(user_id)
        else:
            result = get_method_record(record_id)
        if result is None:
            abort(404)
        return jsonify(result), 200

    elif request.method == 'POST':
        if not request.json:
            abort(400, "Not a JSON")
        if "name" not in request.json:
            abort(400, "Missing name")
        body = request.get_json()
        result = post_method(user_id, body)
        if result is None:
            abort(404)
        return jsonify(result), 201

    elif request.method == 'PUT':
        if not request.json:
            abort(400, "Not a JSON")
        body = request.get_json()
        result = put_method(record_id, body)
        if result is None:
            abort(404)
        return jsonify(result), 200

    elif request.method == 'DELETE':
        result = delete_method(record_id)
        if result is None:
            abort(404)
        return jsonify(result), 200
    else:
        pass
