

* students will learn to use promise constructs to manage asynchronous code.
* students will learn to create a vanilla RESTful API with in-memory persistence.


# Documentation:
  * Write a paragraph about what your API does:

  * Document any resources that helped you complete your assignment:
  * Define how another dev can 'get started' with your api on their own:
      - How do I clone it?
      First fork from my repository, then clone from your repo, then create a branch.
      - How do I start it?

  * Document each of the available endpoints; including example request/response formats for each.

  // TODOs:
  // 1. Create a RESTful API using only vanilla JS and Node
  // 2. Modularize our code, and use best practices for separating concerns
  // 3. Have a single 'in-memory' resource/model for persistence (only while server is running)
  // 4. Recreate the basic functionality of ExpressJS as a Router

  // Demo today will complete GET and POST functionality. Students will complete PUT, DELETE, DOCS, and TESTS

# To get an object in terminal:
http POST :3000/api/toy name=barney desc='purple dino' price='$10' material=plastic

# Example responses:
    - Then the following bad request info is displayed in terminal:
    ```
    HTTP/1.1 201 Created
    Connection: keep-alive
    Content-Type: application/json
    Date: Thu, 31 Aug 2017 02:19:24 GMT
    Transfer-Encoding: chunked

{
    "_id": "16ab953e-6627-433f-a0fe-0a6870f085a3",
    "desc": "purple dino",
    "material": "plastic",
    "name": "barney",
    "price": "$10"
}
    ```

We will keep working on persistence in our next lab.

# Packages and commands to remember:
  - In package.json's scripts, add- "start:debug": "DEBUG=http* nodemon server.js",

  - npm install (for node modules) - DONE
  - npm install httpie - DONE
  - npm install superagent - DONE
  - npm install uuid - DONE
  - npm install -D jest -DONE
    - npm test
  - node server.js or just nodemon (depending on the day)
    - nc localhost 3000 (if needed?)
    - rs (restart, if needed)
  - run start: watch - DONE
  - npm run start: debug - DONE
