//  引入
const mongoose = require('mongoose')
//  连接数据库
mongoose.connect('mongodb://admin:ACElzz2018@119.23.67.3/test', {useUnifiedTopology: true, useNewUrlParser: true});
mongoose.connection.once("open", function () {
  console.log("数据库连接成功");
})
mongoose.connection.once("close", function () {
  console.log("数据库断开连接");
})
// 断开数据库连接
// mongoose.disconnect()
// 创建Schema 对数据库的约束 （模式）对象
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

// 通过Schema来创建Model
// Model代表的是数据库中的集合，通过Model才能对数据库进行操作
// mongoose.model(modelName, Schema)
// modelName 就是要映射的集合名 mongooose会自动将集合名变成复数
let StuModel = mongoose.model('student', stuSchema); // 构造函数
// 想数据库中插入一个文档
// StuModel.create(doc,function(err){})

StuModel.create({
  name: "孙悟空",
  age: 18,
  gender: "male",
  address: "花果山",
},function (err) {
  if(!err){
    console.log("插入成功~~~")
  }else{
    console.log(err);
  }
})
