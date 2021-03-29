const http = require('http');
const fs = require('fs');
const url = require('url');

const host = 'localhost';
const port = 8000;
const server = http.createServer();
server.on('request', (req,res)=> {
    // res.writeHead(200, {'content-type': 'text/html;charset=utf-8'});
    res.writeHead(200);
    console.log(url.parse(req.url, true));
    let query = url.parse(req.url, true).query;
    let name = query.name === undefined ? 'anonyme' : query.name;
    fs.readFile('index.html', 'utf-8', (err,data)=>{
            data = data.replace('{{name}}',name);
            // res.end(`Bonjour ${name}`);
            res.end(data);
                // if(err) throw err;
            //     if(err){
            //     res.writeHead(404, {'content-type': 'text/html;charset=utf-8'});
            //     res.end("ce fichier n'existe pas");}
            //     else{
            //     res.writeHead(200, {'content-type': 'text/html;charset=utf-8'});
            //     res.end(data);
            // };
        });


//     fs.readFile('index.html', (err,data)=>{
//         // if(err) throw err;
//         if(err){
//         res.writeHead(404, {'content-type': 'text/html;charset=utf-8'});
//         res.end("ce fichier n'existe pas");}
//         else{
//         res.writeHead(200, {'content-type': 'text/html;charset=utf-8'});
//         res.end(data);
//     };
// });

});
server.listen(port,host,()=> {
    console.log(`Server is running on http://${host}:${port}`);
});