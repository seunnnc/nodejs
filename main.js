var http = require('http');
var fs = require('fs');
var url = http.request('url')

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    console.log(queryData.id)
    if(_url == '/'){
      _url = '/index.html';
    }
    if(_url == '/favicon.ico'){
        return response.writeHead(404);
    }
    response.writeHead(200)
    response.end(queryData.id);
 
});
app.listen(3000);

// 터미널 실행 방법 => cd ~/dev/nodejs