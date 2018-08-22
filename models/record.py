#!/usr/bin/python3
'''
    Implementation of the Transcript class
'''

from models.base_model import BaseModel
import os

class Record(BaseModel):
    '''
        Definition of the User class
    '''
    user_id = ''
    number = 0
    distance = 0 # meters
    time = 0 # seconds
    calories = 0

    @property
    def user(self):
        user_dict = models.storage.all("User")
        for user in user_dict.values():
            if self.user_id == user.id:
                return user
    