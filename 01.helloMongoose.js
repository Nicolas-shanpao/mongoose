/*
* 1、下载安装
*   yarn add mongoose
* 2、在项目中引入mongoose
*   var mongoose = require("mongoose")
* 3、连接mongodb数据库
*   mongoose.connect('mongodb(协议)://数据库IP地址:端口号/数据库名');
*   如果端口号是默认端口号（27017）则可以省略不写
* 4、断开数据库连接（一般不需要调用）
*     mongoose.disconnect()
*   监听MongoDB数据库连接状态
*   -在mongoose对象中，有一个属性叫connection，该对象表示的就是数据库连接
*     通过监视该对象的状态，可以来监听数据库的连接与断开
*   数据库连接成功的事件
*   mongoose.connection.once("open",function(){})
*   数据库断开的事件
*   mongoose.connection.once("close",function(){})
*
*   Cahema
*   Model
*   Document
* */
//  引入
const mongoose = require('mongoose')
//  连接数据库
mongoose.connect('mongodb://admin:ACElzz2018@119.23.67.3/test', {useUnifiedTopology: true, useNewUrlParser: true});
mongoose.connection.once("open",function(){
  console.log("数据库连接成功");
})
mongoose.connection.once("close",function(){
  console.log("数据库连接成功");
})
// 断开数据库连接
// mongoose.disconnect()
