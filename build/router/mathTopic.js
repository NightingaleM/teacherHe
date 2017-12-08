var express = require('express');
var router = express.Router();
// var mathTopic = require('@b/model/database/teacherEssay').mathTopic
var mathTopic = require('../../backstage/model/mathTopic').mathTopic
console.log('essay')
router.post('/getTitle', function (req, res, next) {
  mathTopic.findAll({
    attributes:[
      'id',
      'EssayTitle',
      'EssayPreview',
      'createdAt'
    ],
    raw:true
  }).then(function(e){
    res.send(e)
  })

});

router.post('/getContent', function (req, res, next) {
  mathTopic.findAll({
    attributes:['EssayContent'],
    raw:true
  }).then(function(e){
    res.send(e)
  })
});

router.post('/setNew',function(req,res,next){
  var title = req.body.title
  var preview = req.body.preview
  var content = req.body.content
  var autor = null
  
  mathTopic.create({
    EssayTitle:title,
    EssayPreview:preview,
    EssayContent:content,
    EssayAutor:autor,
  }).then(function () {
    res.send('成功了')
    return 
  }).catch(function () {
    res.send('失败了')
    return 
    
  })
});

module.exports = router;
