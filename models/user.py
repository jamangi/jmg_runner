#!/usr/bin/python3
'''
    Implementation of the User class which inherits from BaseModel
'''
from models.base_model import BaseModel
import models
import os

class User(BaseModel):
    '''
        Definition of the User class
    '''
    username = ''
    password = ''
    first_name = ''
    last_name = ''
    record_num = 1

    @property
    def records(self):
        record_dict = models.storage.all("Record")
        record_list = []
        for record in record_dict.values():
            if self.id == record.user_id:
                record_list.append(record)
        return record_list

    