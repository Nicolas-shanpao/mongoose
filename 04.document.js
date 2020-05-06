/*
*   Document 和集合中的文档一一对应，Document是Model的实例
*       通过Model查询到的结果都是 Document
*
*       创建一个  Document
*
*/
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
// var stu = new StuModel({
//   name: "奔波儿灞",
//   age: 48,
//   gender: "male",
//   address: "碧波谭"
// })
// console.log(stu);
/*
    document的方法
    Model#save([options],[fn])
 */
// stu.save(function (err) {
//     if(!err){
//       console.log("保存成功");
//     }
// })
StuModel.findOne({}, function (err, doc) {
  if (!err) {
    // console.log(doc);
    // doc.updateOne({$set:{age:28}},function (err) {
    //   if(!err){
    //     console.log("修改成功");
    //   }
    // })
    // doc.age=39
    // doc.save()
    // doc.remove(function (err) {
    //   if(!err){
    //     console.log("大师兄再见~~~~");
    //   }
    // })
    /*
      get(name)
        获取文档中的指定属性值
      set(name,value)
        设置文档中的指定属性值
      toJSON()
        - 转换为JSON对象
      toObject()
        - 转换为一个普通的js对象(没有操作数据库的能力了)
     */
    // console.log(doc.get("name"));
    // console.log(doc.name);
    // doc.set("name","美猴王")
    // doc.name= "美猴王"
    // console.log(doc);
    console.log(doc._id);
    // console.log(doc.toJSON());
    console.log(doc.toObject());
    doc = doc.toObject()
    delete doc.address
    console.log(doc);
    console.log(doc._id);
  }
})
