Shaun Wahle - Lab-08 - Vanilla Rest API

Lab-08

Overview

The purpose of the lab was to make a Create a HTTP Server using the http module that we could GET, POST, PUT, and DELETE a simple resource to. The resources can is accessed by the uuid's and the name, model and year can all be changed.

How To Use

To use this code, run nodemon on the server.js file while in the directory.

To add/POST a new toy in the server enter

http POST :3000/api/toy name=barney desc='purple dino'
where you can change what goes in after each equal sign.

To GET/read a toy by it's Id, enter

http GET localhost:3000/api/toy?id="f18965da-5bf4-471c-9d90-3bea009d1134"
where the id= whatever the id of the toy is.

To update/PUT a toy, enter

http PUT localhost:3000/api/toy id="f18965da-5bf4-471c-9d90-3bea009d1134" name="Batman" desc="batmobile"
where the values of the name and desc are whatever is entered after the equals

To Delete a toy from the server enter

http DELETE localhost:3000/api/toy?id="f9cd6bea-1d0d-4b0a-8cd0-365f52522632"
where the id is the toy's id you want to delete.
