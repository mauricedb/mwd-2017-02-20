// console.log('Hi from Node')

// const http = require('http');

// var server = http.createServer(function (request, response) {
//     response.end('Hi there');

// });

// server.listen(8080, function () {
//     console.log('The server is lisening')
// });


var express = require('express')
var fs = require('fs');
var app = express()
 
app.get('/', function (req, res) {
//   res.send('Hello World')
    // fs.readFile('index.html', function(err, data){
    //     if (err) throw err;

    //     console.log(data.toString());
    //     res.end(data)
    // })

    var stream = fs.createReadStream('index.html');
    stream.pipe(res);
})
 
app.listen(3000)