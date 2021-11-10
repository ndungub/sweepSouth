from flask import  request, make_response,jsonify
import json
from .. import db
from . import general
from .data import getcategories,gettenantusers,gettariff

from .._helpers._helpers import tojsonresponse
from flask.views import MethodView


class TenantAPI(MethodView):
    """
    Tenant  Resource
    """
    def post(self):
        post_data = request.get_json()

        try:
            if post_data.get('tenantid') is not None:
                results = gettenantusers(post_data.get('tenantid'))
            else:
                results = gettenantusers()
            
            if results:
                return  tojsonresponse('000','Success',results)
            else:
                 return  tojsonresponse('001','No data','')
        except Exception as e:
             return  tojsonresponse('003','error',str(e.args))
         
class CategoryAPI(MethodView):
    """
    Category  Resource
    """
    def post(self):
        post_data = request.get_json()

        try:
            if post_data.get('categoryid') is not None:
                results = getcategories(post_data.get('categoryid'))
            else:
                results = getcategories()
            
            if results:
                return  tojsonresponse('000','Success',results)
            else:
                 return  tojsonresponse('001','No data','')
        except Exception as e:
             return  tojsonresponse('003','error',str(e.args))
         


class TariffAPI(MethodView):
    """
    Tariff  Resource
    """
    def post(self):
        post_data = request.get_json()

        try:
            if post_data.get('tariffid') is not None:
                results = gettariff(post_data.get('tariffid'))
            else:
                results = gettariff()
            
            if results:
                return  tojsonresponse('000','Success',results)
            else:
                 return  tojsonresponse('001','No data','')
        except Exception as e:
             return  tojsonresponse('003','error',str(e.args))
         
         
class TestSMSAPI(MethodView):
    """
    SMS  Test
    """
    def post(self):
        post_data = request.get_json()

        try:
            otp = OTP.query.filter_by(mobileno=post_data.get('mobileno'),validated=0,event=post_data.get('event')).first()
            if otp is None:
                randomNumber = random.sample(range(0, 10), 6)
                randomNumber = ''.join([str(elem) for elem in randomNumber])

                otp = OTP(otpcode=randomNumber,mobileno=post_data.get('mobileno'),event=post_data.get('event'))
                db.session.add(otp)
                db.session.commit()
                    
            else:
                randomNumber = otp.otpcode
                    
            msg = 'Your sign up verification code is ' + randomNumber
            results = sendSMS(post_data.get('mobileno'),msg,post_data.get('event'))
            if results:
                return  tojsonresponse(results['code'],results['message'],[])
            else:
                return  tojsonresponse(results['body'],results['message'],[])
        except Exception as e:
             return  tojsonresponse('003','Error sending SMS',str(e.args))
        
                  
tenant_view = TenantAPI.as_view('tenant_api')
category_view = CategoryAPI.as_view('category_api')
tariff_view = TariffAPI.as_view('tariff_api')

testsms_view = TestSMSAPI.as_view('testsms_api')



general.add_url_rule(
    '/general/tenant',
    view_func=tenant_view,
    methods=['POST']
)

general.add_url_rule(
    '/general/category',
    view_func=category_view,
    methods=['POST']
)

general.add_url_rule(
    '/general/tariff',
    view_func=tariff_view,
    methods=['POST']
)

general.add_url_rule(
    '/general/testsms',
    view_func=testsms_view,
    methods=['POST']
)