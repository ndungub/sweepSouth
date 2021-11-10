from flask import flash, request, make_response,jsonify
from flask import current_app as app
import json, datetime

from . import settings
from .. import db

from .models import User,Profile,Branch
from ..general.models import Defination,Misc
from ..settings.data import getusers,getuserprofiles,getbranches

from .._helpers._helpers import tojsonresponse

from flask.views import MethodView

class UserAPI(MethodView):
    def post(self):
        post_data = request.get_json()
        
        try:
            results = getusers()
            
            if results:
                return  tojsonresponse('000','Success',results)
            else:
                 return  tojsonresponse('001','No data','')
        except Exception as e:
             return  tojsonresponse('003','error',str(e.args))
         

class AddUserAPI(MethodView):
    def post(self):
        data = request.get_json()
        
        try:
            user = User(username=data['username'],fullname=data['fullname'],email=data['email'],
                    mobileno=data['mobileno'],branchid=data['branchid'],profileid=data['profileid'],idtype=data['idtype'],
                    idno=data['idno'],status=data['status'],accessbranch=data['accessbranch'],access_type=data['access_type'])              

            db.session.add(user)
            db.session.commit()
            
            return tojsonresponse('000','User Added Successfully',getusers())

        except Exception as ex:
            db.session.rollback()
            return tojsonresponse('003','Error adding User!',str(ex.args))

class EditUserAPI(MethodView):
    def post(self):
        data = request.get_json()
        try:
            
            user = TenantUser.query.filter_by(userid=data['userid']).first()
            user.username=data['username']
            user.fullname=data['fullname']
            user.email=data['email']
            user.mobileno=data['mobileno']
            user.profileid=data['profileid']
            user.idtype=data['idtype']
            user.idno=data['idno']
            user.status=data['status']
            user.access_type=data['access_type']
            user.branchid=data['branchid'] 
            user.accessbranch=data['accessbranch']
            user.editedby = data['editedby']            
        
            
            db.session.commit()
            return  tojsonresponse('000','User edited successfully',getusers())
    
        except Exception as ex:
            db.session.rollback()
            return  tojsonresponse('003','Error edited User!',str(ex.args)) 


class UserProfileAPI(MethodView):
    def post(self):
        post_data = request.get_json()
        
        try:
            
            results = getuserprofiles()
            
            if results:
                return  tojsonresponse('000','Success',results)
            else:
                 return  tojsonresponse('001','No data','')
        except Exception as e:
             return  tojsonresponse('003','error',str(e.args))
         

class AddUserProfileAPI(MethodView):
    def post(self):
        data = request.get_json()
        
        try:
            profile = Profile(profilename=data['profilename'],profiledesc=data['profiledesc'],
                          profilestatus=data['profilestatus'], createdby=data['createdby'])
                            

            db.session.add(profile)
            db.session.commit()
            
            return tojsonresponse('000','User profile Added Successfully',getuserprofiles())

        except Exception as ex:
            db.session.rollback()
            return tojsonresponse('003','Error adding Profile!',str(ex.args))

class EditUserProfileAPI(MethodView):
    def post(self):
        data = request.get_json()
        try:
            
            profile = Profile.query.filter_by(profileid=data['profileid']).first()
            profile.profilename = data['profilename']
            profile.profiledesc = data['profiledesc']
            profile.profilestatus = data['profilestatus'] 
            profile.editedby = data['editedby'] 
          
        
            
            db.session.commit()
            return  tojsonresponse('000','User Profile edited successfully',getuserprofiles())
    
        except Exception as ex:
            db.session.rollback()
            return  tojsonresponse('003','Error edited User Profile!',str(ex.args))                


class BranchAPI(MethodView):
    def post(self):
        post_data = request.get_json()
        
        print('XXXXXXX')
        try:
            results = getbranches()
            
            if results:
                return  tojsonresponse('000','Success',results)
            else:
                 return  tojsonresponse('001','No data','')
        except Exception as e:
             return  tojsonresponse('003','error',str(e.args))
         

class AddBranchAPI(MethodView):
    def post(self):
        data = request.get_json()
        
        try:
            branch = Branch(branchname=data['branchname'],code=data['code'],
                          phoneno=data['phoneno'],address=data['address'],status=data['status'],
                          createdby=data['createdby'])
                            

            db.session.add(branch)
            db.session.commit()
            
            return tojsonresponse('000','Branch Added Successfully',getbranches())

        except Exception as ex:
            db.session.rollback()
            return tojsonresponse('003','Error adding Branch!',str(ex.args))

class EditBranchAPI(MethodView):
    def post(self):
        data = request.get_json()
        try:
            branch = Branch.query.filter_by(branchid=data['branchid']).first()
            
            branch.branchname = data['branchname']
            branch.code = data['code']
            branch.phoneno = data['phoneno']
            branch.address = data['address']
            branch.status = data['status']
            branch.editedby = data['editedby']         
        
            
            db.session.commit()
            return  tojsonresponse('000','Branch edited successfully',getbranches())
    
        except Exception as ex:
            db.session.rollback()
            return  tojsonresponse('003','Error edited User Branch!',str(ex.args))  

class AccessBranchAPI(MethodView):
    def post(self):
        post_data = request.get_json()
        
        try:
            
            
            results = getaccessbranches(post_data.get('userid'))
            
            if results:
                return  tojsonresponse('000','Success',results)
            else:
                 return  tojsonresponse('001','No data','')
        except Exception as e:
             return  tojsonresponse('003','error',str(e.args))
         

class AddAccessBranchAPI(MethodView):
    def post(self):
        data = request.get_json()
        
        accessbranch = AccessBranch.query.filter_by(userid=data['userid']).all()
        
        #db.session.begin()
        try:
            #transaction = create_transaction()
            #db.session.add(transaction)
            
            if accessbranch is not  None:
                db.session.query(AccessBranch).filter(AccessBranch.userid == data['userid']).delete()

            branches = data['branchid'].split(',')
            
            for branch in branches:
                accessbranch = AccessBranch(branchid=branch,userid=data['userid'],
                              createdby=data['createdby'])

                db.session.add(accessbranch)
                
                
            db.session.commit()
            
            return tojsonresponse('000','Access Branch Added Successfully',getaccessbranches(data['userid']))

        except Exception as ex:
            db.session.rollback()
            return tojsonresponse('003','Error adding Access Branch!',str(ex.args))

    

user_view = UserAPI.as_view('user_api')
adduser_view = AddUserAPI.as_view('adduser_api')
edituser_view = EditUserAPI.as_view('edituser_api')

userprofile_view = UserProfileAPI.as_view('userprofile_api')
adduserprofile_view = AddUserProfileAPI.as_view('adduserprofile_api')
edituserprofile_view = EditUserProfileAPI.as_view('edituserprofile_api')

branch_view = BranchAPI.as_view('branch_api')
addbranch_view = AddBranchAPI.as_view('addbranch_api')
editbranch_view = EditBranchAPI.as_view('editbranch_api')


           
settings.add_url_rule(
    '/settings/user',
    view_func=user_view,
    methods=['POST']
)
settings.add_url_rule(
    '/settings/adduser',
    view_func=adduser_view,
    methods=['POST']
)
settings.add_url_rule(
    '/settings/adduser',
    view_func=edituser_view,
    methods=['POST']
)


settings.add_url_rule(
    '/settings/userprofile',
    view_func=userprofile_view,
    methods=['POST']
)
settings.add_url_rule(
    '/settings/adduserprofile',
    view_func=adduserprofile_view,
    methods=['POST']
)
settings.add_url_rule(
    '/settings/adduserprofile',
    view_func=edituserprofile_view,
    methods=['POST']
)


settings.add_url_rule(
    '/settings/branch',
    view_func=branch_view,
    methods=['POST']
)
settings.add_url_rule(
    '/settings/addbranch',
    view_func=addbranch_view,
    methods=['POST']
)
settings.add_url_rule(
    '/settings/addbranch',
    view_func=editbranch_view,
    methods=['POST']
)

         