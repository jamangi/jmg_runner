#!/usr/bin/python3
'''
    Package initializer
'''

from models.base_model import BaseModel
from models.user import User
from models.record import Record
import os

classes = {"User": User, "BaseModel": BaseModel,
           "Record": Record}

if os.getenv('HBNB_TYPE_STORAGE') == 'db':
    # from models.engine.db_storage import DBStorage
    # storage = DBStorage()
    pass
else:
    from models.engine.file_storage import FileStorage
    storage = FileStorage()

storage.reload()