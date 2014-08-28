var http = require('http'),
    fs = require('fs'),
    static = require('node-static');

var folder = new(static.Server)('./foo');


/*fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(process.env.PORT);
});*/

http.createServer(function (req, res) {
    req.addListener('end', function () {
        folder.serve(req, res);
    });
}).listen(process.env.PORT);