from flask import flash
from flask import current_app as app
import json, datetime
from sqlalchemy.sql import label
from sqlalchemy import select,case,or_,and_
from .models import Quote


from .. import db


def getquote(region = None):
    
    if region is None:
        quotes = db.session.query(Quote).all() 
          
    else:
        quotes = db.session.query(Quote).filter(Quote.region == region).all() 
        

    json_results = []
    
   

    for quote  in quotes:
        
        data = {}
        data['id'] = quote.id
        data['region'] = quote.region
        data['lang'] = quote.lang
        data['symbols'] = quote.symbols
        data['results'] = quote.results
        data['createdon'] = quote.createdon 
        
        json_results.append(data)

    return json_results  
