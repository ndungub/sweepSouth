from flask import flash
from flask import current_app as app
import json, datetime
from sqlalchemy.sql import label
from sqlalchemy import select,case,or_,and_


from . import settings
from .. import db

from .models import User,Profile,Branch
from ..general.models import Defination,Misc



def getusers(userid = None):  
    case_userstatus = case([(User.status == '1', 'YES')], else_= 'NO').label("userstatus")
    case_isauthorizeddesc = case([(User.isauthorized == '1', 'YES')], else_= 'NO').label("isauthorizeddesc")
    
    if userid is None:
        users = db.session.query(User,Profile,Branch,Misc,case_userstatus,case_isauthorizeddesc).filter(Profile.profileid == User.profileid,Branch.branchid == User.branchid,Misc.id == User.idtype).all() 
    else:
        users = db.session.query(User,Profile,Branch,Misc,case_userstatus,case_isauthorizeddesc).filter(Profile.profileid == User.profileid,Branch.branchid == User.branchid,Misc.id == User.idtype, User.userid == userid).all() 
    
    
    json_results = []

    for user,profile,branch,misc,userstatus,isauthorizeddesc in users:
        
        data = {}
        data['userid'] = user.userid
        data['username'] = user.username
        data['fullname'] = user.fullname
        data['email'] = user.email
        data['mobileno'] = user.mobileno
        data['profileid'] = user.profileid
        data['profilename'] = profile.profilename
        data['idtype'] = user.idtype
        data['idtypename'] = misc.name
        data['idno'] = user.idno
        data['status'] = user.status
        data['userstatus'] = userstatus
        data['branchid'] = user.branchid 
        data['branchname'] = branch.branchname
        data['loginattempt'] = user.loginattempt
        data['createdon'] = user.createdon
        data['editedon'] = user.editedon
        data['lastpwdchange'] = user.lastpwdchange 
        data['access_type'] = user.access_type
        data['isauthorized'] = user.isauthorized
        data['isauthorizeddesc'] = isauthorizeddesc
        
        
        
        json_results.append(data)

    return json_results

def getuserprofiles(profileid = None):   
    case_status = case([(Profile.profilestatus == '1', 'YES')], else_= 'NO').label("userstatus")
    
    if profileid is None:
        profiles = db.session.query(Profile,case_status).all() 
    else:
        profiles = db.session.query(Profile,case_status).filter(Profile.profileid == profileid).all() 

    json_results = []

    for profile,case_status in profiles:
        
        data = {}
        data['profileid'] = profile.profileid
        data['profilename'] = profile.profilename
        data['profilestatus'] = profile.profilestatus
        data['profilestatusdesc'] = case_status
        data['profiledesc'] = profile.profiledesc
        data['createdon'] = profile.createdon
        data['editedon'] = profile.editedon

        json_results.append(data)
    
    return json_results
   
def getbranches(branchid = None):   
    case_status = case([(Branch.status == '1', 'YES')], else_= 'NO').label("status")
    
    if branchid is None:
        branches = db.session.query(Branch,case_status).all() 
    else:
        branches = db.session.query(Branch,case_status).filter(Branch.branchid == branchid).all() 

    json_results = []

    for branch,case_status in branches:
        
        data = {}
        data['branchid'] = branch.branchid
        data['branchname'] = branch.branchname
        data['code'] = branch.code
        data['address'] = branch.address
        data['phoneno'] = branch.phoneno
        data['status'] = branch.status
        data['statusdesc'] = case_status
        data['createdon'] = branch.createdon
        data['editedon'] = branch.editedon

        json_results.append(data)
    
    return json_results


