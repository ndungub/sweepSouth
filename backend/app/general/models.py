import enum
import datetime
from sqlalchemy.sql import func
import os
import json

from app import db



class Defination(db.Model):
    """
    Create a tb_def table
    """

    __tablename__ = 'tb_def'

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    name = db.Column(db.String(60), unique=True)
    skey = db.Column(db.String(200))
    createdon = db.Column(db.DateTime, nullable=False, server_default=func.now())
    editedon = db.Column(db.DateTime, onupdate=func.now())
    isactive = db.Column(db.Boolean, server_default='1', nullable=False)
    isvisible = db.Column(db.Boolean, server_default='1', nullable=False)
   

class Misc(db.Model):
    """
    Create a tb_misc table
    """

    __tablename__ = 'tb_misc'

    id = db.Column(db.Integer, nullable=False,primary_key=True)
    name = db.Column(db.String(60), unique=True)
    parentid = db.Column(db.Integer, db.ForeignKey('tb_def.id'), nullable=False)
    skey = db.Column(db.String(200))
    createdon = db.Column(db.DateTime, nullable=False, server_default=func.now())
    editedon = db.Column(db.DateTime, onupdate=func.now())
    settings = db.Column(db.JSON, nullable=True)
    isactive = db.Column(db.Boolean, server_default='1', nullable=False)
    isvisible = db.Column(db.Boolean, server_default='1', nullable=False)


