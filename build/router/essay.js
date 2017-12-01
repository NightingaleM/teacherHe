var express = require('express');
var router = express.Router();
// var TeacherEssay = require('@b/model/database/teacherEssay').TeacherEssay
var TeacherEssay = require('../../backstage/model/teacherEssay').TeacherEssay

router.post('/getTitle', function (req, res, next) {
  TeacherEssay.findAll({
    attributes:[
      'id',
      'EssayTitle',
      'EssayPreview',
      'EssayAutor',
      'createdAt'
    ],
    raw:true
  }).then(function(e){
    res.send(e)
  })

});

router.post('/getContent', function (req, res, next) {
  TeacherEssay.findAll({
    attributes:['EssayContent'],
    raw:true
  }).then(function(e){
    res.send(e)
  })
});

router.post('/setNewEssay',function(req,res,next){
  console.log(req.body)
  var title = req.body.title
  var autor = req.body.autor
  var preview = req.body.preview
  var content = req.body.content
  
  TeacherEssay.create({
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
