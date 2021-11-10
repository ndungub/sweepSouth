import enum
import datetime
from sqlalchemy.sql import func
import os
import json

from app import db



class Quote(db.Model):
    """
    Create a tb_quote table
    """

    __tablename__ = 'tb_quote'

    id = db.Column(db.Integer, nullable=False, primary_key=True)
    region = db.Column(db.String(10))
    lang = db.Column(db.String(10))
    symbols = db.Column(db.String(100))
    results = db.Column(db.JSON, nullable=True)
    error = db.Column(db.String(200))
    createdby = db.Column(db.Integer, db.ForeignKey('tb_users.userid'), nullable=False, index=True)
    createdon = db.Column(db.DateTime, nullable=False, server_default=func.now())
    editedon = db.Column(db.DateTime, onupdate=func.now())
    

