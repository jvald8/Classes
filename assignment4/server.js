var http = require('http');
var url  = require('url');

function onRequest(request, response) {
  console.log("calling the onRequest function");

  var pathname = url.parse(request.url).pathname;

  var pathnameLength = pathname.length;
  console.log(pathname);
  if(pathname === "/time") {
    // Should always write the head of a response body first
    response.writeHead(200, {"Content-Type":"text/plain"});
    // Creating a new date object and passing it to the
    var currentTime = new Date();
    response.write(currentTime.toDateString());
  } else if(pathname.substring(0, 6) === "/greet/") {
    var greetLength = ("/greet/").length;
    var greetThisName = pathname.substring(greetLength, pathnameLength);
    response.writeHead(200, {"Content-Type":"text/plain"});
    response.write("Hello " + greetThisName);
  } /*else if(pathname) {
    response.writeHead(404, {"Content-Type":"text/plain"});
    response.write("404 error: File not found.")
  }*/

  response.end();
}

http.createServer(onRequest).listen(8888);

console.log("Server has started");
