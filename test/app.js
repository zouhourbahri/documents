const http = require('http');
const fs = require('fs');
const url=require('url');
const server = http.createServer();
const port=8080;
const host='localhost';
const salutation = require('../salutation');
salutation();
server.on('request', (req,res)=>{
    let query = url.parse(req.url,true).query;
    console.log(query);
    fs.readFile('../index.html','utf-8',(err,data)=>{
        if(err){
            res.writeHead(404, {'content-type': 'text/html;charset=utf-8'});
            res.end('404 NOT FOUND');
        }
        else {
            res.writeHead(200, {'content-type': 'text/html;charset=utf-8'});
            let name = query.name.split('').reverse().join('');
            data = data.replace('{{name}}', name);
            res.end(data);
        }
    });
// res.writeHead(200);
// res.end(query.name);
});
server.listen(port,host,()=> {
    console.log(`Server is running on http://${host}:${port}`);
});