#!/usr/bin/python3
'''
    This module contains our routes for our status and stats.
'''
from api.v1.views import app_views
from flask import jsonify, request, abort
from models import storage


@app_views.route('/routes')
def show_routes():
    '''
        This will give us the status of our app views.
        - @app_views.route('/users/', methods=['POST', 'GET'])
        - @app_views.route('/users/<id>', methods=['GET', 'PUT', 'DELETE'])
        - @app_views.route('/users/<user_id>/records', methods=['POST', 'GET'])
        - @app_views.route('/records/<record_id>', methods=['PUT', 'DELETE', 'GET'])
    '''
    route_dict = [
        {"route": "/users",
         "methods": "['GET', 'POST']",
         "description": "Get all users, or create a new user",
         "details":"Post must send ['username', 'first_name', 'last_name']"},
        {"route": "/users/<id>",
         "methods": "['GET', 'PUT', 'DELETE']",
         "description": "Get, Update, or Delete one user",
         "details":"Put can modify ['username', 'first_name', 'last_name']"},
        {"route": "/users/<user_id>/records",
         "methods": "['GET', 'POST']",
         "description": "Get all of one user's records, or create a new record",
         "details":"Post must send ['username', 'first_name', 'last_name']"},
        {"route": "/records/<record_id>",
         "methods": "['GET', 'PUT', 'DELETE']",
         "description": "Get, Update, or Delete a specified record",
         "details":"Put can modify ['username', 'first_name', 'last_name']"}
    ]
    return jsonify(route_dict)
