import datetime
from sqlalchemy.sql import label
from sqlalchemy import select,case,or_,and_

from flask import jsonify

def alchemyencoder(obj):
    """JSON encoder function for SQLAlchemy special classes."""
    if isinstance(obj, datetime.date):
        return obj.strftime('%Y-%m-%d %H-%M-%S') 
    elif isinstance(obj, decimal.Decimal):
        return float(obj)    
   
def tojsonresponse(code,message,results):
    return jsonify(
                    {"code":code,"message": message, "results": results}
                ) 
    
def fieldparser(field):
    """JSON encoder function for SQLAlchemy special classes."""
    if isinstance(field, datetime.date):
        return field.strftime('%Y-%m-%d %H-%M-%S') 
    elif isinstance(field, decimal.Decimal):
        return float(field)
    else :
        return field
    
    
class KeyValue: 
    def __init__(self, key, value): 
        self.key = key 
        self.value = value   
        
def caseelse(field,keyvalue,label):
    """case else parser."""
    
    for obj in keyvalue:   
        the_case = case([(field == obj.key, obj.value)], else_= 'Not Applicable').label(label)

    if isinstance(obj, datetime.date):
        return obj.strftime('%Y-%m-%d %H-%M-%S') 
    elif isinstance(obj, decimal.Decimal):
        return float(obj)  