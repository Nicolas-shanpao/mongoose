/*
  定义一个模块，用来连接MongoDB数据库
 */
const mongoose = require('mongoose')
mongoose.connect('mongodb://admin:ACElzz2018@119.23.67.3/test', {useUnifiedTopology: true, useNewUrlParser: true});
mongoose.connection.once("open", function () {
  console.log("数据库连接成功");
})
