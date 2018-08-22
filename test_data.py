#!/usr/bin/python3
""" Test .get() and .count() methods
"""
import models.engine.utility as util
from models import storage

util.load_test_data(overwrite=True)
print("All objects: {}".format(storage.count()))
print("User objects: {}".format(storage.count("User")))
print()
first_user_id = list(storage.all("User").values())[0].id
print("First user: {}".format(storage.get("User", first_user_id)))
print()
print("All users and records:")
users = storage.all("User")
for user in users.values():
    print("#####################################")
    print("username:{}\nfullname: {} {}\n".format(user.username, user.first_name, user.last_name))
    records = user.records
    for record in records:
        n = record.number
        d = record.distance
        t = record.time
        c = record.calories
        print("record #{}\ndistance: {}\ntime: {}\ncalories: {}\n".format(n, d, t, c))



'''
user_id = ''
    number = 0
    distance = 0 # meters
    time = 0 # seconds
    calories = 0
'''