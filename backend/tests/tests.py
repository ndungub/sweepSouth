#!/usr/bin/env python
# coding=utf-8

from test_sweepsouth import *
'Init'
import unittest
import pathmagic

from flask import current_app as app
from flask_migrate import upgrade


if __name__ == '__main__':
    app = current_app('config.Test')
    tester_app = app.test_client()
    with app.app_context():
        upgrade()
    unittest.main()
