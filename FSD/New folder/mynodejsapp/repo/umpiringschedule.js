const MongoClient = require('mongodb').MongoClient;
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'CSK';

 

function fetchUmpiringSchedule(callback){
//const schedule = {"name":"Vijayan"}

// Use connect method to connect to the server

MongoClient.connect(url, function(err, client) {
  const db = client.db(dbName);
  const collection = db.collection('umpiringschedule');
  console.log("Connected successfully to server");
  collection.find({}).toArray((err, docs)=> {
    console.log("Found the following records");
    console.log(docs)
    client.close()
    callback(null,docs)
  })
});

};
function addUmpiringSchedule(sched,callback){

  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    const db = client.db(dbName);
    const collection = db.collection('umpiringschedule');
    
    collection.insertOne(sched,(err, docs)=> {
      if(err) callback(err,null);
      callback(null,{"message": "Successfully Inserted"})
      client.close()
    })
  });
  
 };

 function updateUmpiringSchedule(sched,callback){

  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    const db = client.db(dbName);
    const collection = db.collection('umpiringschedule');
    
    collection.updateOne(sched[0],{$set:sched[1]},(err, docs)=> {
      if(err) callback(err,null);
      callback(null,{"message": "Successfully updated"})
      client.close()
    })
  });
  
 };

 module.exports = {fetchUmpiringSchedule,addUmpiringSchedule,updateUmpiringSchedule};