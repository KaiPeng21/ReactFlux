# ReactFlux

This is an example of a todo-list app written in React JS and a Flux-Structured Framework. A Python-Flask backend server is written for testing how the Flux-Structured Framework and the API are communicated.

## Explore the App
### Run the backend Python-Flask Server:
Navigate to the **/server/app** directory and install the Python Flask server dependencies. Export the FLASK_APP filename to the environment and run the flask server. You may view the sample RESTful API output in **http://localhost:5000/api** 
```sh
$ pip install -r requirements
$ cd src
$ export FLASK_APP=server.py
$ flask run
```

### View the ReactJS Frontend Display
Navigate to the **/todoapp** directory and install the ReactJS dependencies and then run the server. View the Todo List App at **http://localhost:3000**
```sh
$ npm install
$ npm start
```


## Flask Server Explanation
The Python-Flask backend server is used to demonstrate how the Flux-Structured framework would interact with the API. This server holds the todo-list application in a variable named **todoListState** in **server.py** and serves as a FAKE database. That is, the server cannot hold the data when it is turned off. The client can interact with this FAKE database using the following HTTP requests:
- GET
- POST
- PUT
- DELETE


## Flux-Structured Framework Explanation

- Components
- Stores
- Dispatcher
- Actions
- Constants
- Utils