from flask import flash
from flask import current_app as app
import json, datetime
from sqlalchemy.sql import label
from sqlalchemy import select,case,or_,and_


from .. import db

from .models import Defination,Misc

def getdefinations(filterby = None,value = None):
    
    if filterby is None:
        definations = db.session.query(Defination).all() 
          
    else:
        if filterby == 'parentid':
            definations = db.session.query(Defination).filter(Defination.parentid == value).all() 
        else:
            definations = db.session.query(Defination).filter(Defination.skey == value).all() 

    json_results = []
    
   

    for defination  in definations:
        
        data = {}
        data['id'] = defination.id
        data['name'] = defination.name
        data['skey'] = defination.skey
        data['isactive'] = defination.isactive
        data['isvisible'] = defination.isvisible
        data['createdon'] = defination.createdon 
        data['editedon'] = defination.editedon
        
        json_results.append(data)

    return json_results  

def getmiscs(parentid = None, skey = None):      
    if parentid is None:
        miscs = db.session.query(Defination,Misc).filter(Defination.id == Misc.parentid).all() 
    elif parentid is not None and skey is None:
        miscs = db.session.query(Defination,Misc).filter(Defination.id == Misc.parentid,Misc.parentid == defination).all()
    else:
        miscs = db.session.query(Defination,Misc).filter(Defination.id == Misc.parentid,Misc.skey == skey).all()
        
    json_results = []
    
    
    for defination,misc in miscs:
        
        data = {}
        data['id'] = misc.id
        data['name'] = misc.name
        data['definationname'] = defination.name
        data['definationskey'] = defination.skey
        data['skey'] = misc.skey
        data['parentid'] = misc.parentid
        data['settings'] = misc.settings
        data['isactive'] = misc.isactive
        data['isvisible'] = misc.isvisible
        data['createdon'] = misc.createdon
        data['editedon'] = misc.editedon

        json_results.append(data)
    
    
    return json_results  

def getcategories(categoryid = None):
    
    if categoryid is None:
        categories = db.session.query(Category).all() 
    else:
        categories = db.session.query(Category).filter(Category.categoryid == categoryid).all() 
        
    json_results = []
    for category in categories:
        data = {}
        data['categoryid'] = category.categoryid
        data['categoryname'] = category.categoryname
        
        
        json_results.append(data)
    
    return json_results  



def gettenantusers(tenantuserid = None):
    if tenantuserid is None:
        tenantusers = db.session.query(TenantUser.tenantid,TenantUser.fullname).all() 
    else:
        tenantusers = db.session.query(TenantUser.tenantid,TenantUser.fullname).filter(TenantUser.tenantuserid == tenantuserid).all() 

    json_results = []
    i = 0
    for tenantuser in tenantusers:
        data = {}
        data['tenantid'] = tenantuser.tenantid
        data['fullname'] = tenantuser.fullname

        
        json_results.append(data)
    return json_results 

def gettariff(tariffid = None):
    case_isactive= case([(Tariff.isactive == '1', 'YES')], else_= 'NO').label("tariffisactive")
    
    if  tariffid is not None:
        tariffs = db.session.query(Tariff,case_isactive).filter(Tariff.tariffid == tariffid).all()
    else:
        tariffs = db.session.query(Tariff,case_isactive).all()
        
    json_results = []
    for tariff,case_isactive in tariffs:
        data = {}
        data['tariffid'] = tariff.tariffid
        data['tariffname'] = tariff.tariffname
        data['periodtype'] = tariff.periodtype
        data['amount'] = tariff.amount
        data['currency'] = tariff.currency
        data['isactive'] = tariff.isactive
        
        featureresult = []
        tarifffeatures = db.session.query(TariffFeatures).filter(TariffFeatures.tariffid == tariff.tariffid).all();
        for feature in tarifffeatures:
            featuredata = {}
            featuredata['tariffid'] = feature.tariffid
            featuredata['tariffname'] = tariff.tariffname
            featuredata['featuredesc'] = feature.featuredesc
            
            featureresult.append(featuredata)

        data['features'] = featureresult
        
        
        json_results.append(data)
    return json_results 