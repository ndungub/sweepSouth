from flask import  redirect, url_for,request, make_response,jsonify
from flask_login import login_required, login_user, logout_user
import json, datetime
from flask import current_app as app

from . import auth
from .. import db,bcrypt
from ..settings.models import User,Profile,BlacklistToken
from flask_cors import cross_origin

from ..general.data import getdefinations,getmiscs
from ..settings.data import getusers,getuserprofiles,getbranches
from flask.views import MethodView

"""
    oauth2
"""
from authlib.integrations.flask_oauth2 import current_token



class LoginAPI(MethodView):
    """
    User Login Resource
    """
    def post(self):
        post_data = request.get_json()
        print('XXXXXXXXXXX')
        try:
            # fetch the user data
            user = User.query.filter_by(username=post_data.get('username')).first()
           
            if user and user.verify_password(post_data.get('password')):

                auth_token = user.encode_auth_token(user.userid)

                results = {}
                results['users'] = getusers(user.userid)[0]
                
                results['definations'] = getdefinations();
                results['miscs'] = getmiscs()
                results['userprofiles'] = getuserprofiles()
                results['branches'] = getbranches()
                results['jwtToken'] = auth_token

                if auth_token:                
                    responseObject = {
                        'code': '000',
                        'message': 'Successfully logged in.',
                        'results': results
                    }
                    return make_response(jsonify(responseObject)), 200
            else:
                responseObject = {
                    'status': 'fail',
                    'message': 'User does not exist.'
                }
                return make_response(jsonify(responseObject)), 404
        except Exception as e:
            responseObject = {
                'code': '003',
                'status': 'fail',
                'message': str(e.args)
            }
            return make_response(jsonify(responseObject)), 500
        
        def resetpassword():
            data = request.get_json()
            try:
                
                user = User.query.filter_by(userid=data['userid']).first()
                user.pwd = User.genPass(data['password'])
        
                db.session.commit()
                return  tojsonresponse('000','Success',{})
        
            except Exception as ex:
                db.session.rollback()
                return  tojsonresponse('003','Error',str(ex.args)) 
            

class ValidateTokenAPI(MethodView):
    """
    Validate Token
    """
    def post(self):
        # get the auth token
        auth_header = request.headers.get('Authorization')
        if auth_header:
            try:
                auth_token = auth_header.split(" ")[1]
            except IndexError:
                responseObject = {
                    'status': 'fail',
                    'message': 'Bearer token malformed.'
                }
                return make_response(jsonify(responseObject)), 401
        else:
            auth_token = ''
        if auth_token:
            resp = User.decode_auth_token(auth_token)
            if not isinstance(resp, str):
                user = User.query.filter_by(userid=resp).first()
                results = getusers(user.userid)
                responseObject = {
                    'status': 'success',
                    'data': results
                }
                return make_response(jsonify(responseObject)), 200
            responseObject = {
                'status': 'fail',
                'message': resp
            }
            return make_response(jsonify(responseObject)), 401
        else:
            responseObject = {
                'status': 'fail',
                'message': 'Provide a valid auth token.'
            }
            return make_response(jsonify(responseObject)), 401
                
class UserAPI(MethodView):
    """
    User Resource
    """
    #decorators = [cross_origin(supports_credentials=True)]
    
    def get(self):
        # get the auth token
        auth_header = request.headers.get('Authorization')
        if auth_header:
            try:
                auth_token = auth_header.split(" ")[1]
            except IndexError:
                responseObject = {
                    'status': 'fail',
                    'message': 'Bearer token malformed.'
                }
                return make_response(jsonify(responseObject)), 401
        else:
            auth_token = ''
        if auth_token:
            resp = User.decode_auth_token(auth_token)
            if not isinstance(resp, str):
                user = User.query.filter_by(id=resp).first()
                results = getusers(user.userid)
                responseObject = {
                    'status': 'success',
                    'data': results
                }
                return make_response(jsonify(responseObject)), 200
            responseObject = {
                'status': 'fail',
                'message': resp
            }
            return make_response(jsonify(responseObject)), 401
        else:
            responseObject = {
                'status': 'fail',
                'message': 'Provide a valid auth token.'
            }
            return make_response(jsonify(responseObject)), 401
        
class ResetPasswordAPI(MethodView):
    """
    Reset user Password
    """
    def post(self):
        # get the post data
        post_data = request.get_json()
        try:
            # fetch the user data
           
            user = User.query.filter_by(userid=post_data.get('userid')).first()
            
            if user:

                user.pwd = flask_bcrypt.generate_password_hash(post_data.get('password'))
                
                print(post_data.get('password'))
               
                
                db.session.commit()
                responseObject = {
                    'status': 'success',
                    'message': 'Password reset successfully.'
                }
                return make_response(jsonify(responseObject)), 201
        except Exception as e:
            print(e)
            responseObject = {
                'status': 'fail',
                'message': str(e.args)
            }
            return make_response(jsonify(responseObject)), 500        
        
class LogoutAPI(MethodView):
    """
    Logout Resource
    """
    def post(self):
        # get auth token
        
        auth_header = request.headers.get('Authorization')
        
       
        
        if auth_header:
            auth_token = auth_header.split(" ")[1]
        else:
            auth_token = ''

        if auth_token:
            resp = User.decode_auth_token(auth_token)
            
            
            if not isinstance(resp, str):
                # mark the token as blacklisted
                blacklist_token = BlacklistToken(token=auth_token)
                try:
                    # insert the token
                    db.session.add(blacklist_token)
                    db.session.commit()
                    responseObject = {
                        'status': 'success',
                        'message': 'Successfully logged out.'
                    }
                    return make_response(jsonify(responseObject)), 200
                except Exception as e:
                    responseObject = {
                        'status': 'fail',
                        'message': e
                    }
                    return make_response(jsonify(responseObject)), 200
            else:
                responseObject = {
                    'status': 'fails',
                    'message': resp
                }
                return make_response(jsonify(responseObject)), 401
        else:
            responseObject = {
                'status': 'fail',
                'message': 'Provide a valid auth token.'
            }
            return make_response(jsonify(responseObject)), 403
        
def tojsonresponse(code,message,results):
    return jsonify(
                    {"code":code,"message": message, "results": results}
                )
            
# define the API resources
login_view = LoginAPI.as_view('login_api')
validatetoken_view = ValidateTokenAPI.as_view('validatetoken_api')
resetpassword_view = ResetPasswordAPI.as_view('reset_password_api')
user_view = UserAPI.as_view('user_api')
logout_view = LogoutAPI.as_view('logout_api')


auth.add_url_rule(
    '/auth/authenticate',
    view_func=login_view,
    methods=['POST']
)

auth.add_url_rule(
    '/auth/validatetoken',
    view_func=validatetoken_view,
    methods=['POST']
)

auth.add_url_rule(
    '/auth/resetpassword',
    view_func=resetpassword_view,
    methods=['POST']
)
auth.add_url_rule(
    '/auth/status',
    view_func=user_view,
    methods=['GET']
)
auth.add_url_rule(
    '/auth/logout',
    view_func=logout_view,
    methods=['POST']
)
