const url = require('url');
const http = require('http');
const fs = require('fs');  
const https = require('https');
const options = {
  pfx: fs.readFileSync('abkeystest-ABWinTestTA01https-20201128.pfx'),
  passphrase: ''
};

const app = https.createServer(options, (request, response) => {
  var path = url.parse(request.url).pathname;  
  switch (path) {  
      case '/':  
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write('<h1>Some basic response</h1>');
        response.end();
        break;  
      case '/index.html':  
          fs.readFile('src/html' + path, function(error, data) {  
              if (error) {  
                  response.writeHead(404);  
                  response.write(error);  
                  response.end();  
              } else {  
                  response.writeHead(200, {  
                      'Content-Type': 'text/html'  
                  });  
                  response.write(data);  
                  response.end();  
              }  
          });  
          break;  
          
      case '/src/js/connector.js':  
          fs.readFile('src/js/connector.js', function(error, data) {  
              if (error) {  
                  response.writeHead(404);  
                  response.write(error);  
                  response.end();  
              } else {  
                  response.writeHead(200, {  
                      'Content-Type': 'application/javascript'  
                  });  
                  response.write(data);  
                  response.end();  
              }  
          });  
          break;  
      default:  
          response.writeHead(404);  
          response.write("opps this doesn't exist - 404");  
          response.end();  
          break;  
  }  


});

app.listen(443);