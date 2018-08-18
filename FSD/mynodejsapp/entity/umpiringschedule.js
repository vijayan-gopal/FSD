const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const UmpiringSchema = new Schema({
  name: String,
  Date: String,
});

const umpiringschedule = mongoose.model('umpiringschedule',UmpiringSchema);

module.exports = umpiringschedule