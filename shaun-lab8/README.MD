Shaun Wahle - Lab-08 - Vanilla Rest API

Lab-08

Overview

The purpose of the lab was to make a Create a HTTP Server using the http module that we could GET, POST, PUT, and DELETE a simple resource to. The resources can is accessed by the uuid's and the name, model and year can all be changed.

How To Use

To use this code, run nodemon on the server.js file while in the directory.

To add/POST a new car in the server enter

http POST localhost:3000/api/car name="Nissan" model="Altima" year=2008
where you can change what goes in after each equal sign.

To GET/read a car by it's Id, enter

http GET localhost:3000/api/car?id="f18965da-5bf4-471c-9d90-3bea009d1134"
where the id= whatever the id of the car is.

To update/PUT a car, enter

http PUT localhost:3000/api/car id="f18965da-5bf4-471c-9d90-3bea009d1134" name="Batman" model="batmobile" horsepower=10
where the values of the name, model and year are whatever is entered after the equals

To Delete a car from the server enter

http DELETE localhost:3000/api/car?id="f9cd6bea-1d0d-4b0a-8cd0-365f52522632"
where the id is the car's id you want to delete.
