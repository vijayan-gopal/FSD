const http = require('http')
const fs = require('fs');

//var data = fs.readFileSync('./config.json')
//const config = JSON.parse(data);
//console.log(config.port)

var server = http.createServer((req, res)=> {
    console.log(req.method)
    console.log(req.url);
    var contentType = 'text/html'
    if (req.url.endsWith('.json')) {
        contentType = 'application/json'
    }

    fs.readFile('files/test.html', (err, data)=>{
        console.log('Contents: ' + data);
        console.log('files/test.html')
        if(data == undefined){
            res.writeHead(404); 
            res.end("No content available")
        }
        else{
            console.log('******test*****')
            res.writeHead(200,{'Content-type':contentType});
            // res.writeHead()
            res.write(''+ data);
            res.end();
        }
       
    })
    
})

server.listen(3000, ()=> { console.log ('listening on port:3000')});