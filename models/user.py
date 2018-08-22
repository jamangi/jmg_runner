#!/usr/bin/python3
'''
    Implementation of the User class which inherits from BaseModel
'''
from models.base_model import BaseModel
import os

class User(BaseModel):
    '''
        Definition of the User class
    '''
    first_name = ''
    last_name = ''
    password = ''
    record_num = 1