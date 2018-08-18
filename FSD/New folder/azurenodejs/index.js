var http = require('http');
var cluster = require('cluster')
var numCpus = require('os').cpus().length
const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
//console.log(numCpus)

//if (cluster.isMaster){
//    console.log('Master ${worker.process.pid} is running')

//    for (let i=0;i<numCpus;i++){
//        cluster.fork()
//    }

//    cluster.on('exit',(Worker,code,signal)=>{
//        console.log('worker ${worker.process.pid} died');
//    });
//} else{
var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World!");
//    throw err;
});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
//}