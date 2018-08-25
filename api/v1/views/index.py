#!/usr/bin/python3
'''
    This module contains our routes for our status and stats.
'''
from api.v1.views import app_views
from flask import jsonify, request, abort
from models import storage


@app_views.route('/status')
def status_of_app_views():
    '''
        This will give us the status of our app views.
    '''
    return jsonify({"status": "OK"})


@app_views.route('/stats')
def display_stats():
    '''
        Endpoint that retrieves the number of each object by type.
    '''
    stats = {
        "users": storage.count("User"),
        "records": storage.count("Record")
    }
    return jsonify(stats)
