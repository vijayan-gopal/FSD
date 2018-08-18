const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
 
// Connection URL
const url = 'mongodb://localhost:27017';
 
// Database Name
const dbName = 'CSK';
 
// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
 
  const db = client.db(dbName);
  const collection = db.collection('umpiringschedule')
  //collection.find({}).toArray((err,docs)=>{

    var dt = new Date();
    var dt1 = "08-11-2018"
//  var players = [{"name": "Satheesh","Date": dt},{"name": "Pahal","Date": dt},{"name": "Balaji","Date": dt}]
    var player = {"name": "Satheesh","Date": dt1}
    //console.log(player[0])
    //  collection.insertMany(players,(err,result)=>{
  collection.insertOne(player,(err,result)=>{
  if(err) throw err;
  console.log(result);
//  collection.updateOne(player[0],{$set:player[1]},(err,result)=>{
//   if(err) throw err;
 //    console.log(result);
     client.close();
  })
});