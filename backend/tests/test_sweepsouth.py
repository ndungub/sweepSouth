#!/usr/bin/env python
# coding=utf-8

import unittest
import json

import pathmagic

from .. import db
from base import BaseTestClass
from ..settings.models import User


class TestDish(BaseTestClass):
    user = {
        'email': 'ndungub@gmail.com',
        'username': 'admin',
        'fullname': 'Boniface Ndungu',
        'pwd': '123456',
        'mobileno': '254721881745',
        'profileid': '1',
        'idtype': '1',
        'idno': '222222',
        'status': '1',
        'createdon': '2021-11-13',
        'editedon': 'null',
        'loginattempt': '0',
        'lastpwdchange': '2021-11-13',
        'access_type': 'MOBILENO',
        'countrydetails': '{}',
        'isauthorized': '1',
        'branchid': '1',
        'accessbranch': '1',
        
        
    }


   
