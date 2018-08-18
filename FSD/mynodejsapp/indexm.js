const express = require('express');
const app = express();
//const repo = require('./repo/umpiringschedulem');
// To use mongoose uncomment above and comment below
const repo = require('./repo/umpiringschedule');
const cors = require('cors');
var bodyParser = require('body-parser');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

app.get('/umpiringschedule',(req,res)=>{
        repo.fetchUmpiringSchedule((err,docs)=>{
        if(err) throw err;
        res.json(docs)
        console.log('successful get')
        })
      });

app.post('/addschedule',(req,res)=>{
    var sched = req.body;
    repo.addUmpiringSchedule(sched, (err,resp)=>{
    if(err) throw err;
    res.json(resp)
    console.log(resp)
     })
   });

app.put('/updateschedule',(req,res)=>{
    var sched = req.body;
    console.log(sched)
    repo.updateUmpiringSchedule(sched, (err,resp)=>{
    if(err) throw err;
    res.json(resp)
    console.log(resp)
     })
   });
  

app.listen(3000,()=>{console.log('Listening to port 3000')})  
