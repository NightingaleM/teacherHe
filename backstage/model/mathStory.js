let path = require('path')
let Sequelize = require('sequelize')
// 第一步 建立一个二进制文件（数据库文件）

var sequelize = new Sequelize(undefined, undefined, undefined, {
  host: 'localhost',
  dialect: 'sqlite',
  storage: path.join(__dirname,'./database/mathStory.sqlite')
});

var mathStory = sequelize.define('teacherEssay', {
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


mathStory.findAll({raw:true}).then(function(essay){
  console.log(essay)
})

module.exports.mathStory = mathStory

