let path = require('path')
let Sequelize = require('sequelize')
// 第一步 建立一个二进制文件（数据库文件）

var sequelize = new Sequelize(undefined, undefined, undefined, {
  host: 'localhost',
  dialect: 'sqlite',
  storage: path.join(__dirname,'./database/teacherEssay.sqlite')
});
/*
完成第一步后，注销这块
sequelize
.authenticate()
.then(function(err) {
  console.log('Connection has been established successfully.');
})
.catch(function (err) {
  console.log('Unable to connect to the database:', err);
});
*/
// 第一步结束，node运行后即可生成一个二进制文件

// 第二步，定义模型
var TeacherEssay = sequelize.define('teacherEssay', {
  EssayTitle:{
    type:Sequelize.STRING
  },
  EssayPreview:{
    type: Sequelize.STRING
  },
  EssayContent:{
    type: Sequelize.STRING
  },
  EssayAutor:{
    type: Sequelize.STRING
  },
});
/*
// 如果在TeacherEssay.sync()中写入force：true，
// 那么将在重新创建数据库之前删除原来的数据库
TeacherEssay.sync().then(function () {
  // Table created
  return TeacherEssay.create({
    EssayTitle: '欢迎来到数学乐园',
    EssayPreview: '这里是数学乐园',
    EssayContent:`<h1>基于Vue开发的一个个人网站</h1>
    <p>主要技术栈：</p>
    <ul>
    <li>Vue</li>
    <li>Vue-cli</li>
    <li>WebPack</li>
    <li>Express</li>
    <li>axios</li>
    <li>Sequelize</li>
    </ul>
    <p>开发时间：<br />
    11月1日——————</p>
    <p>代码地址：<a href="https://github.com/NightingaleM/teacherHe">GitHub</a> 
    如果您觉得不错，请帮我点亮一颗星，谢谢。</p>`,
    EssayAutor:'欧阳润驰'
  });
});
*/
// TeacherEssay.findAll({raw:true}).then(function(essay){
//   console.log(essay)
// })
// 第二步结束，定义模型，并且创建第一个数据，创建后进行打印，查看是否创建成功

module.exports.TeacherEssay = TeacherEssay
