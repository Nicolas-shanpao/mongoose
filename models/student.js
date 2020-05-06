/*
  用来定义student的模型
 */
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
let stuSchema = new Schema({
  name: String,
  age: Number,
  gender: {
    type: String,
    default: "female"
  },
  address: String,
});
let StuModel = mongoose.model('student', stuSchema);
module.exports = StuModel
