# Lab 07 - Vanilla HTTP Server
## Tim Turner
=====================================

### Description

This app is a HTTP server.  You can send GET and POST requests to get a cowsay response.  The valid endpoints are `/` and `/cowsay`.  

To run the server, you must have nodejs installed.  You also have to run npm install to download the npm required modules.  After you have those done, type "node server.js" in the terminal window.  The server will now be running.

To send requests to the server, type some of the following commands.  Note: these commands require HTTPie to be installed on your computer.  

`http GET localhost:3000/cowsay?text=hello+there` to return cowsay hello there

`http POST localhost:3000/cowsay text='hello there'` to return cowsay hello there

`http GET localhost:3000/` to return 'hello from my server'

`http GET localhost:3000/?text=hello` to return 'hello from my server'

`http POST localhost:3000/ name=joe` to return 'hello from my server'

`http POST localhost:3000/` should return 400 error

`http POST localhost:3000/cowsay name=joe` should return 400 error
