const mongoose = require('mongoose');
const umpiringschedule = require('../entity/umpiringschedule');

mongoose.connect('mongodb://localhost/CSK');

function fetchUmpiringSchedule(callback){

umpiringschedule.find({},(err,docs)=>{
    if(err) throw err;
    callback(err,docs);
})
}

function addUmpiringSchedule(schedule,callback){
  var us = new umpiringschedule(schedule);
  us.save((err,docs)=>{
    
  if(err) throw err;
  callback(err,{"message":"Successfully added"})
});

}

function updateUmpiringSchedule(newschedule,callback){
    umpiringschedule.update(newschedule[0],newschedule[1],(err,docs)=>{
    if(err) throw err;
    callback(err,{"message": "Successfully Updated"})
  });
  
  }

module.exports = {fetchUmpiringSchedule,addUmpiringSchedule,updateUmpiringSchedule}