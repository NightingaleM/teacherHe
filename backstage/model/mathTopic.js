let path = require('path')
let Sequelize = require('sequelize')

var sequelize = new Sequelize(undefined, undefined, undefined, {
  host: 'localhost',
  dialect: 'sqlite',
  storage: path.join(__dirname,'./database/mathTopic.sqlite')
});

var mathTopic = sequelize.define('mathTopic', {
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

// mathTopic.findAll({raw:true}).then(function(essay){
//   console.log(essay)
// })

module.exports.mathTopic = mathTopic