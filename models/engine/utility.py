#!/usr/bin/python3
'''
    This module contains our helper functions for FileStorage and DBStorage.
'''
import models
import os

def convert_class(cls, choice="string"):
    '''
        This will convert our cls to a string in case it's not.
        Or it will return None.
    '''
    if choice == 'string':
        if cls is None or cls == "":
            c = None
        elif type(cls) != str:
            c = cls.__classname__
        else:
            c = cls
        return c
    elif choice == 'class':
        c = convert_class(cls, 'string')
        return (models.classes.get(c))

def load_test_data(choice="file", overwrite=True):
    '''
        This will load test data.
    '''

    if overwrite:
        getall = models.storage.all().copy()
        for ele in getall.values():
            models.storage.delete(ele)

    users = [('Alabama', 'password', "Allie", "Bama"), 
             ('Arizona', 'password', "Arie", "Zona"), 
             ('Washington', 'password', "Washi", "Tony"), 
             ('Texas', 'password', "Tea", "Xena"), 
             ('California', 'password', "Calie", "Fornia")]

    records = [()]

    if choice == "file":
        fs = models.storage
        for user in users:
            new_user = models.User()
            setattr(new_user, "username", user[0])
            setattr(new_user, "password", user[1])
            setattr(new_user, "first_name", user[2])
            setattr(new_user, "last_name", user[3])
            fs.new(new_user)
        fs.save()

        stored_users = fs.all("User")
        records = [(3200, 2400, 200), (6400, 4800, 400), (1600, 1200, 100)] #meters, seconds, calories
        for user in stored_users.values():
            for record in records:
                new_record = models.Record()
                setattr(new_record, "user_id", user.id)
                setattr(new_record, "number", user.record_num)

                setattr(user, "record_num", user.record_num + 1)

                setattr(new_record, "distance", record[0])
                setattr(new_record, "time", record[1])
                setattr(new_record, "calories", record[2])
                fs.new(new_record)
        fs.save()

    else:
        pass
