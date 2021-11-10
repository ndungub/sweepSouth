import enum
import datetime
from sqlalchemy.sql import func
from sqlalchemy.orm.attributes import QueryableAttribute
from sqlalchemy.sql.expression import not_
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema
from marshmallow import (Schema, fields, post_dump, post_load, pre_load,
                         validate)

import jwt

from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.sql import case

import os
import json

from flask_login import UserMixin
from sqlalchemy.ext.declarative import declarative_base

from app import db, login_manager, ma, bcrypt
from flask import current_app as app

import profile

class User(UserMixin, db.Model):
    """
    Create an tb_users table
    """

    # Ensures table will be named in plural and not in singular
    # as is the name of the model
    __tablename__ = 'tb_users'

    userid = db.Column(db.Integer, nullable=False, primary_key=True)
    email = db.Column(db.String(60), nullable=False,index=True, unique=True)
    username = db.Column(db.String(60), nullable=False, index=True, unique=True)
    fullname = db.Column(db.String(60), nullable=False, index=True)
    pwd = db.Column(db.String(128))
    mobileno = db.Column(db.String(60),nullable=False, index=True, unique=True)
    profileid = db.Column(db.Integer, db.ForeignKey('tb_profile.profileid'), nullable=False)
    idtype = db.Column(db.String(60), nullable=False)
    idno = db.Column(db.String(60),nullable=False, index=True, unique=True)
    status = db.Column(db.Integer, nullable=False, server_default='0')
    createdon = db.Column(db.DateTime, nullable=False, server_default=func.now())
    editedon = db.Column(db.DateTime, onupdate=func.now())
    loginattempt = db.Column(db.Integer, nullable=False, server_default='0')
    lastpwdchange = db.Column(db.DateTime, onupdate=func.now())
    access_type = db.Column(db.Enum('MOBILENO','EMAIL'), nullable=False, server_default='MOBILENO')
    countrydetails = db.Column(db.JSON, nullable=True)
    isauthorized = db.Column(db.Integer, nullable=False, server_default='0')
    branchid = db.Column(db.Integer,  nullable=False,index=True)
    accessbranch = db.Column(db.String(100))
    

    @property
    def password(self):
        """
        Prevent pasword from being accessed
        """
        raise AttributeError('password is not a readable attribute.')

    @password.setter
    def password(self, plaintext):
        self.pwd = bcrypt.generate_password_hash(plaintext)
        
    
    def verify_password(self, password):
        """
        Check if hashed password matches actual password
        """
        
        return bcrypt.check_password_hash(self.pwd, password)
    
    def genPass(password):
        return bcrypt.generate_password_hash(password)

    #def __repr__(self):
        #return '<User: {}>'.format(self.userid)
    
    # Override default User Mixin get_id
    def get_id(self):
        return (self.userid)


    def encode_auth_token(self, userid):
        """
        Generates the Auth Token
        :return: string
        """
        
        try:
            payload = {
                'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, minutes=20),
                'iat': datetime.datetime.utcnow(),
                'sub': userid
            }
            
            
            return jwt.encode(
                payload,
                app.config.get('SECRET_KEY'),
                algorithm='HS256'
            )
            
            
        except Exception as e:
            return e
  
    @staticmethod
    def decode_auth_token(auth_token):
        """
        Validates the auth token
        :param auth_token:
        :return: integer|string
        """
        try:
            payload = jwt.decode(auth_token, app.config.get('SECRET_KEY'),algorithms=["HS256"])
            
            is_blacklisted_token = BlacklistToken.check_blacklist(auth_token)
            if is_blacklisted_token:
                return 'Token blacklisted. Please log in again.'
            else:
                return payload['sub']
        except jwt.ExpiredSignatureError:
            return 'Signature expired. Please log in again.'
        except jwt.InvalidTokenError:
            return 'Invalid token. Please log in again.'
                
class BlacklistToken(db.Model):
    """
    Token Model for storing JWT tokens
    """
    __tablename__ = 'blacklist_tokens'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    token = db.Column(db.String(500), unique=True, nullable=False)
    blacklisted_on = db.Column(db.DateTime, nullable=False)

    def __init__(self, token):
        self.token = token
        self.blacklisted_on = datetime.datetime.now()

    def __repr__(self):
        return '<id: token: {}'.format(self.token)

    @staticmethod
    def check_blacklist(auth_token):
        # check whether auth token has been blacklisted
        res = BlacklistToken.query.filter_by(token=str(auth_token)).first()
        if res:
            return True
        else:
            return False


# Set up user_loader
@login_manager.user_loader
def load_user(userid):
    return User.query.get(int(userid))


class Profile(db.Model):
    """
    Create a tb_profile table
    """

    __tablename__ = 'tb_profile'

    profileid = db.Column(db.Integer, primary_key=True)
    profilename = db.Column(db.String(60), unique=True)
    profiledesc = db.Column(db.String(200))
    profilestatus = db.Column(db.Integer, nullable=False, server_default='0')
    createdon = db.Column(db.DateTime, nullable=False, server_default=func.now())
    editedon = db.Column(db.DateTime, onupdate=func.now())
    createdby = db.Column(db.Integer, nullable=False, index=True)
    editedby = db.Column(db.Integer, index=True)
    users = db.relationship('User', backref='profile',lazy='dynamic')
   
    
       
class Branch(db.Model):
    """
    Create a tb_branches table
    """

    __tablename__ = 'tb_branches'

    branchid = db.Column(db.Integer, primary_key=True)
    branchname = db.Column(db.String(60))
    code = db.Column(db.String(20))
    status = db.Column(db.Integer, nullable=False, server_default='0')
    address = db.Column(db.String(200))
    phoneno = db.Column(db.String(20))
    createdon = db.Column(db.DateTime(timezone=True), nullable=False, server_default=func.now())
    editedon = db.Column(db.DateTime, onupdate=func.now())
    createdby = db.Column(db.Integer, nullable=False, index=True)
    editedby = db.Column(db.Integer, index=True)
  

    
    
   

     