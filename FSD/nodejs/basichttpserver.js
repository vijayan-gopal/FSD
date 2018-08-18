const http = require('http');
const fs = require('fs');

var server = http.createServer((req,res)=>{

    console.log(res.method)
    console.log(res.url)

    fs.readFile('files'+ req.url,(err,data)=>{
   //     console.log(data)
        res.writeHead(200,{'content-type': 'text/html'});
        res.write(data);
        res.end();
    })

})

server.listen(3000,()=>{console.log("Listening on port 3000")});