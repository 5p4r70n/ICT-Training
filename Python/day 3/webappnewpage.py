from flask import Flask  #import flask library
app=Flask(__name__)         #name to app obj
@app.route('/')             #first line / represents the route dir 
def home():                 #definiton of '/' is home its is mandetery in this code 
    return "hello world"    #content of that page...
@app.route('/about/')       #another page with that quated name we can create a page
def about():                #page definition
    return "about the about page" 
if __name__ == '__main__':      #check wether the ___name__ == __main__ conforming only devoloper can debug the code... if this command is not here anyone can access and debug the code..
    app.run(debug=True) 