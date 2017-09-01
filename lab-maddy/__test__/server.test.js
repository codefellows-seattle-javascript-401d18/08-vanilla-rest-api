'use strict';














// *`GET`: test 404, it should respond with 'not found' for valid requests made with an id that was not found
// * `GET`: test 400, it should respond with 'bad request' if no id was provided in the request
//  * _note: this will need to change if you complete the bonus point_
// * `GET`: test 200, it should contain a response body for a request made with a valid id
// * `POST`: test 400, it should respond with 'bad request' if no request body was provided or the body was invalid
// * `POST`: test 201, it should respond with the body content for a post request with a valid body
// * `PUT`: test 400, it should respond with 'bad request' if no request body was provided or the body was invalid
// * `PUT`: test 204, it should respond with no body content for a put request with a valid body
// * `DELETE`: test 400, it should respond with 'bad request' if no resource id was provided
// * `DELETE`: test 404, it should respond with 'not found' for valid requests made with an id that was not found
// * `DELETE`: test 204, it should respond with no body content for a request request with a valid resource id
