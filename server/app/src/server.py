# This is a backend server that uses a FAKE database to store the todolist information.
# It will be used to serve as an API for the React-Based Flux-Structured Frontend Framework.
# Server End Point: http://localhost:5000/api

from flask import Flask, jsonify, request

app = Flask(__name__)

# Fake Database
todoListState = {
    0 : {'id' : 0, 'content' : 'learning react', 'complete' : True}, 
    1 : {'id' : 1, 'content' : 'learning flux', 'complete' : False}
    } # default values in json list

# Testing
@app.route('/')
def index():
    return jsonify({ 'test' : 'it works!'})

# API
@app.route('/api', methods=['GET', 'POST', 'PUT', 'DELETE'])
def api():
    # POST Request:
    # Post with JSON: {'content' : 'String', 'complete' : Boolean}
    if request.method == 'POST':
        recieve = request.get_json()

        try:
            todoListState[len(todoListState)] = {'id' : len(todoListState), 'content' : recieve['content'], 'complete' : recieve['complete']}

            return jsonify({'success' : True, 'id' : len(todoListState)})
        except Exception as ex:
            print(ex)
            return jsonify({'success' : False})
    
    # PUT Request:
    # Put with JSON: {'id' : int, complete' : Boolean}
    if request.method == 'PUT':
        recieve = request.get_json()

        try:
            todoListState[recieve['id']]['complete'] = recieve['complete']

            return jsonify({'success' : True})
        except Exception as ex:
            print(ex)
            return jsonify({'success' : False})

    # DELETE Request:
    # Delete with JSON: {'id' : Int}
    if request.method == 'DELETE':
        recieve = request.get_json()
        
        try:
            todoListState.pop(recieve['id'])

            return jsonify({'success' : True})
        except Exception as ex:
            print(ex)
            return jsonify({'success' : False})

    # GET Request: 
    # Get All Tasks
    return jsonify([v for k, v in todoListState.items()])

# Set CORS rules and enable the frontend to access the server from a different host/port
@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
    
    return response

if __name__ == "__main__":
    app.run(debug=True)