// Data Intensive and Realtime Applications

var http = require('http');
var courses = [{id: 1, name: 'JS'},{id: 2, name: 'node'}];
var users = ['userA', 'userB'];

var server = http.createServer(function (request, response) {
    // console.log('Got a Request! ', request);

    if (request.url === '/api/courses') {
        response.write(JSON.stringify(courses));
        response.end();
    }else if (request.url === '/api/users') {
        response.write(JSON.stringify(users));
        response.end();
    } else {
        response.write('Hello World :) ');
        response.end();
    }   
}).listen(3001);































// var server = http.createServer(function(request, response){
//     console.log('Got a Request! ');

//     

//     if (request.url === '/') {
// set response header
//      response.writeHead(200, { 'Content-Type': 'text/html' }); 
//         response.write('Hello World :) ');
//         response.end();
//     }

//     if (request.url === '/api/courses') {
//         response.write(JSON.stringify([{id: 1, name: 'JS'},{id: 2, name: 'node'}]));
//         response.end();
//     }

// if (req.url == "/admin") {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<html><body><p>This is admin Page.</p></body></html>');
//     res.end();

// }
//      res.end('Invalid Request!');

// });

server.listen(3002);