var http = require('http');
var fs = require('fs');
var url = http.request('url')

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var title = queryData.id;

    console.log(url.parse(_url, true))

    fs.readFile(`data/${queryData.id}`, 'utf-8', function(err, description) {
      var template = `
      <!doctype html>
      <html>
      <head>
        <title>WEB1 - ${title}</title>
        <meta charset="utf-8">
      </head>
      <body>
        <h1><a href="/">WEB</a></h1>
        <ul>
          <li><a href="/?id=HTML">HTML</a></li>
          <li><a href="/?id=CSS">CSS</a></li>
          <li><a href="/?id=JavaScript">JavaScript</a></li>
        </ul>
        <h2>${title}</h2>
        <p>${description}</p>
      </body>
      </html>
      `;
      response.writeHead(200)
      response.end(queryData.id);
    })
    
 
});
app.listen(3000);

// 터미널 실행 방법 => cd ~/dev/nodejs