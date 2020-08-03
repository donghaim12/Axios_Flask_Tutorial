from flask import  Flask,request,session,redirect,render_template,url_for
from flask_cors import CORS
import flask

app = Flask(__name__)
CORS(app)
@app.route('/')
def HelloWorld():
    d = 'hello'
    return d

@app.route('/result', methods = ['GET','POST'])
def get_query_from_react():
    if request.method=='GET':   
       
        return "OK this is GET"
    elif request.method == 'POST':
        #data1 = request.form
        data1 = request.get_json()                      #silent=True
        data1 = str(data1)
        return data1
    else:
        return "OK"
  


if __name__ == "__main__":
    app.run(debug = True)