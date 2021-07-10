const url = require('url');
const http = require('http');
const fs = require('fs');  
const https = require('https');
const options = {
  pfx: fs.readFileSync('abkeystest-ABWinTestTA01https-20201128.pfx'),
  passphrase: ''
};

function pad(n, len) {
    s = n.toString();
    if (s.length < len) {
        s = ('0000' + s).slice(-len);
    }
    return s;
}

const app = https.createServer(options, (request, response) => {
  var path = url.parse(request.url).pathname;  
  switch (path) {  
    case '/':  
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write('<h1>Some basic response</h1>');
        response.end();
        break;  
    case '/index.html':  
            var reqtmp = request;
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
          
    case '/movecard':  
        var urlQuery = url.parse(request.url).query;
        // var urlParams = url.parse(request.url).URLSearchParams;
        var urlParams =  new URLSearchParams(urlQuery);
        var cardname = urlParams.get('q');
        var cardlist = urlParams.get('l');
        var timestamp = new Date();
        var date = timestamp.getFullYear()+'-' + pad((timestamp.getMonth()+1),2) + '-' + pad(timestamp.getDate(),2) + ' ' + pad(timestamp.getHours(),2) + ':'  + pad(timestamp.getMinutes(),2) + ':' + pad(timestamp.getSeconds(),2);
        fs.writeFile('data/' + cardname, date,{ encoding: 'utf8' }, function(error) {
            if (error) {  
                response.writeHead(404);  
                response.write(error);  
                response.end();  
            } else {  
                response.writeHead(200, {  
                    'Content-Type': 'text/html'  
                });  
                response.end();  
            }  

        });
        break;  
          
    case '/cardmove.html':  
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
          
          case '/section.html':  
            var reqtmp = request;
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
          
          case '/logocmdbuild.png':  
          fs.readFile('src/html' + path, function(error, data) {  
              if (error) {  
                  response.writeHead(404);  
                  response.write(error);  
                  response.end();  
              } else {  
                  response.writeHead(200, {  
                      'Content-Type': 'image/png'  
                  });  
                  response.write(data);  
                  response.end();  
              }  
          });  
          break;  
          
          case '/core.less':  
          fs.readFile('src/html' + path, function(error, data) {  
              if (error) {  
                  response.writeHead(404);  
                  response.write(error);  
                  response.end();  
              } else {  
                  response.writeHead(200, {  
                      'Content-Type': 'text/css'  
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

      case '/src/js/utility.js':  
          fs.readFile('src/js/utility.js', function(error, data) {  
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