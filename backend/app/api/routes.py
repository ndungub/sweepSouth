from flask import  request, make_response,jsonify
import json

from flask import current_app as app


from .. import db
from . import api

from .models import Quote
from .data import getquote


from .._helpers._helpers import tojsonresponse
from flask.views import MethodView
import requests



class QuoteAPI(MethodView):
    def post(self):
        post_data = request.get_json()
        
        try:
            if post_data is not None:
                headers = {'Accept': 'application/json','x-api-key': app.config.get('API_KEY')}
                query = {'region':post_data.get('region'), 'lang':post_data.get('lang'),'symbols':post_data.get('symbols')}
                
                response = requests.get("https://yfapi.net/v6/finance/quote",
                                        headers=headers,
                                        params=query
                                    )
                
                data = response.json()
                responseObj = data['quoteResponse']['result']
                
                for resp in responseObj:
                    print('XXXXX2')
                    print(resp)
                    quote = Quote(region=post_data.get('region'),
                                lang=post_data.get('region'),
                                symbols=post_data.get('symbols'),
                                results=resp,
                                createdby=post_data['createdby']
                            )
                    db.session.add(quote)
                
                db.session.commit()   
            
                return  tojsonresponse('000','Success',getquote())
            else:
                return  tojsonresponse('003','Empty results',region=post_data.get('region'))
        except Exception as e:
             return  tojsonresponse('004','error',str(e.args))
         

class ViewQuoteAPI(MethodView):
    def post(self):
        post_data = request.get_json()
        
        
        try:
            if post_data.get('region') == 0:
                results = getquote()
            else:
                results = getquote(post_data.get('region'))
                
            
            if results:
                return  tojsonresponse('000','Success',results)
            else:
                 return  tojsonresponse('001','No data','')
        except Exception as e:
             return  tojsonresponse('003','error',str(e.args))
                 
                  
quote_view = QuoteAPI.as_view('quote_api')
view_quote_view = ViewQuoteAPI.as_view('view_quote_api')

api.add_url_rule(
    '/api/quote',
    view_func=quote_view,
    methods=['POST']
)

api.add_url_rule(
    '/api/viewquote',
    view_func=view_quote_view,
    methods=['POST']
)

