# app/general/__init__.py

from flask import Blueprint

general = Blueprint('general', __name__)

from . import routes


