# Lab 07 - Vanilla HTTP Server
## Tim Turner
=====================================

### Description

This app is a HTTP server.  You can send POST, PUT, GET, and DELETE requests to the server and get a response.  The valid only API endpoint is `/api/toy`.

To run the server, you must have NodeJS installed.  You also have to run npm install to download the npm required modules.  These commands listed below to interact with the server require HTTPie to be installed on your computer.  After you have those done, type "node server.js" in the terminal window.  The server will now be running.

To send requests to the server, in another terminal windows, type some of the following commands.    


`http POST localhost:3000/api/toy name=slinky desc=plastic` should create a new toy named slinky with a description of metal and return a message with the toy id, name, and description if successful.

`http GET localhost:3000/api/toy?_id="7ea8e888-7253-4120-9113-a1fdd21289ee"` should get a toy with an id of "7ea8e888-7253-4120-9113-a1fdd21289ee".  The toy ids are initialized on successful toy creation.  This will return the toy with it's id, name, and description properties.  

`http GET localhost:3000/api/toy?_id="some-invalid-id-string"` should return an error message stating the toy record could not be found.  


Type control + C to stop the server. 
