const mongoose = require('mongoose')
mongoose.connect('mongodb://admin:ACElzz2018@119.23.67.3/test', {useUnifiedTopology: true, useNewUrlParser: true});
mongoose.connection.once("open", function () {
  console.log("数据库连接成功");
})
mongoose.connection.once("close", function () {
  console.log("数据库断开连接");
})
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
/*
* -有了Model,我们就可以对数据库进行增删改查了
*
*
* Model.create(doc(s),[callback])
*   -用来创建一个或多个文档并添加到数据库中
*   -参数：
*     doc(s) 可以是一个文档对象，也可以是一个文档对象的数组
*     callback 当操作完成以后调用的回调函数
*
*/
// StuModel.create([
//   {
//     name: "沙和尚",
//     age: 38,
//     gender: "male",
//     address: "流沙河"
//   }
// ], function (err) {
//   if (!err) {
//     console.log("插入成功")
//   }
//   console.log(arguments);
// })
/*
* - 查询
* Model.find(condotopns,[projection],[options],[callback])
*   - 查询所有符合条件的文档
* Model.findById(id,[projection],[options],[callback])
*   - 根据文档的id属性查询文档
* Model.findOne([condotopns],[projection],[options],[callback])
*   - 查询符合条件的第一个文档  总是返回一个具体的文档对象
*   condotopns 查询条件
*   projection 投影
*      - 两种方式
*         {name:1,_id:0}
*         "name -_id"
*   options 选项(skip limit)
*   callback 回调函数，查询结果会通过回调函数返回
*               回调函数必须传
*/
// StuModel.find({name:"唐僧"},{name:1,_id:0},function (err, docs) {
//   if(!err){
//     console.log(docs);
//   }
// })
// StuModel.find({name:"唐僧"},"name age -_id",function (err, docs) {
//   if(!err){
//     console.log(docs);
//   }
// })
// StuModel.find({}, "name age -_id", {skip: 2, limit: 10}, function (err, docs) {
//   if (!err) {
//     console.log(docs);
//   }
// })
// StuModel.findOne({}, function (err, doc) {
//   if (!err) {
//     console.log(doc);
//   }
// })
// StuModel.findById("5eb22d0bf11724532ca6077a", function (err, doc) {
//   if (!err) {
//     console.log(doc);
//      // 通过find()查询的结果，返回的对象，就是Document，文档对象
//      // Document对象是model的实例
//     console.log(doc instanceof StuModel)
//   }
// })
/*
* 修改
*   Model.update(conditions,doc,[options],[callback])
*   Model.updateMany(conditions,doc,[options],[callback])
*   Model.updateOne(conditions,doc,[options],[callback])
*   Model.replaceOne(conditions,doc,[options],[callback])  //  替换一个
*       参数
*         - conditions  查询条件
*         - doc  修改后的对象
*         - options  配置参数
*         - callback  回调函数
*/
// 修改唐僧年龄为20
// StuModel.updateOne({name: "唐僧"}, {$set: {age: 20}}, function (err) {
//   if (!err) {
//     console.log("修改成功");
//   }
// })
/* 删除
*   Model.remove(conditions,[callback])
*   Model.deleteOne(conditions,[callback])
*   Model.deleteMany(conditions,[callback])
*/
// StuModel.remove({name: "唐僧"}, function (err) {
//   if (!err) {
//     console.log("修改成功");
//   }
// })
/*
*   Model.countDocuments(conditions,[callback])  //可以添加filter
*   Model.estimatedDocumentCount()  //快速给出数量
*/
StuModel.countDocuments({name:"唐僧"}, function (err, count) {
  if (!err) {
    console.log(count);
  }
})
