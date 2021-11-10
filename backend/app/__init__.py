# app/__init__.py
import os

# third-party imports
from flask import Flask
from flask_mysqldb import MySQL
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow
from flask_bcrypt import Bcrypt


import mysql.connector


# local imports
from config import app_config

from flask_cors import CORS


# db variable initialization
db = SQLAlchemy()
ma = Marshmallow()
bcrypt = Bcrypt()
 
login_manager = LoginManager()

def init_app(config_name):
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_object(app_config[config_name])
    app.config.from_pyfile('config.py')
    
    db.init_app(app)
    
    os.environ['AUTHLIB_INSECURE_TRANSPORT'] = '1'

    
    with app.app_context():
      login_manager.init_app(app)
      login_manager.login_message = "You must be logged in to access this page."
      login_manager.login_view = "auth.login" 

      migrate = Migrate(app, db)
      ma = Marshmallow(app)
      bcrypt = Bcrypt(app)
      CORS(app,support_credentials=True)
      
      
      from .settings import models
      from .api import models

      from .auth import auth as auth_blueprint
      app.register_blueprint(auth_blueprint)
      
      from .settings import settings as settings_blueprint
      app.register_blueprint(settings_blueprint)
      
      from .api import api as api_blueprint
      app.register_blueprint(api_blueprint)
      
      
    
      return app 
