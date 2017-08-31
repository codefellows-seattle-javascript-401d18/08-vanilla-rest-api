# *Vanilla Ice Cream Server*

# Server request and response demonstration.
[![license](https://img.shields.io/github/license/mashape/apistatus.svg)]()

## Project Description
Using node.js, HTTP, superagent, cowsay, and querystring I have created a Server that responds to different GET and POST responses from users.

## Table of Contents
+ [Installation](#installation)
+ [Usage](#Usage)
+ [About](#About)

### Installation:
+ Fork this repository and clone the forked repository anywhere you'd like on your computer.

+ Open your terminal
  + Navigate to the folder where you did your git clone with your newly forked repository.
  + Make sure you are in the root directory IE. lab-gavin.;
  + Type npm i into your terminal.
+ Open two terminal windows.
+ In the firt terminal type
  + `npm run start:watch`
  + This creates a local server which should log to the console
    + `server up:: 3000`
+ In the second terminal window
  + `brew install httpie`
  + This installs httpie which is a package that allows you to make calls to our local server.
  + Here are a list of commands you may use with httpie.
    + `http GET localhost:3000/api/toy _id=''` will return 'Hello from my server!'   
    + `http PUT http GET localhost:3000/api/toy?_id=''` will return 'Hello from my server!'  
    + `http GET http GET localhost:3000/api/toy _id=''` will return a beautiful cow saying "hi".
    + `http PUT localhost:3000/cowsay text=hi` will return a beautiful cow saying "hi".
    + `http DELETE localhost:3000/cowsay/monkeys text=hi` will return 404.

### Usage
This app is completely free to be used however you'd like!


### About
I am currently a Full Stack Web Developer with focus in UX. If you are interested in using me for any of your projects please feel free to reach out to me!
