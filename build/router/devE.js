var express = require('express');
var router = express.Router();
var TeacherEssay = require('../../backstage/model/teacherEssay').TeacherEssay
var mathTopic = require('../../backstage/model/mathTopic').mathTopic
var mathStory = require('../../backstage/model/mathStory').mathStory


router.post('/setNew/essay',function(req,res,next){
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
router.post('/setNew/topic',function(req,res,next){
  var title = req.body.title
  var autor = null;
  var preview = req.body.preview
  var content = req.body.content
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

router.post('/setNew/story',function(req,res,next){
  var title = req.body.title
  var autor = null
  var preview = req.body.preview
  var content = req.body.content
  mathStory.create({
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
// router.post('/setNew/game',function(req,res,next){
//   var title = req.body.title
//   var autor = null
//   var preview = req.body.preview
//   var content = req.body.content
//   TeacherEssay.create({
//     EssayTitle:title,
//     EssayPreview:preview,
//     EssayContent:content,
//     EssayAutor:autor,
//   }).then(function () {
//     res.send('成功了')
//     return 
//   }).catch(function () {
//     res.send('失败了')
//     return 
//   })
// });
// router.post('/setNew/stPic',function(req,res,next){
//   var title = req.body.title
//   var autor = null
//   var preview = req.body.preview
//   var content = req.body.content
//   TeacherEssay.create({
//     EssayTitle:title,
//     EssayPreview:preview,
//     EssayContent:content,
//     EssayAutor:autor,
//   }).then(function () {
//     res.send('成功了')
//     return 
//   }).catch(function () {
//     res.send('失败了')
//     return 
//   })
// });
// router.post('/setNew/clPic',function(req,res,next){
//   var title = req.body.title
//   var autor = null
//   var preview = req.body.preview
//   var content = req.body.content
//   TeacherEssay.create({
//     EssayTitle:title,
//     EssayPreview:preview,
//     EssayContent:content,
//     EssayAutor:autor,
//   }).then(function () {
//     res.send('成功了')
//     return 
//   }).catch(function () {
//     res.send('失败了')
//     return 
//   })
// });

router.post('/delete/essay', function (req, res, next) {
  TeacherEssay.destroy({where:{id:req.body.id}}).then(function(){
    res.send({status:200})
  }).catch(function(){
    res.send({status: 500})
  })
});
router.post('/delete/topic', function (req, res, next) {
  mathTopic.destroy({where:{id:req.body.id}}).then(function(){
    res.send({status:200})
  }).catch(function(){
    res.send({status: 500})
  })
});
router.post('/delete/story', function (req, res, next) {
  mathStory.destroy({where:{id:req.body.id}}).then(function(){
    res.send({status:200})
  }).catch(function(){
    res.send({status: 500})
  })
});
// router.post('/delete/game', function (req, res, next) {
//   Note.destroy({where:{id:req.body.id}}).then(function(){
//     res.send({status:200})
//   }).catch(function(){
//     res.send({status: 500})
//   })
// });
// router.post('/delete/stPic', function (req, res, next) {
//   Note.destroy({where:{id:req.body.id}}).then(function(){
//     res.send({status:200})
//   }).catch(function(){
//     res.send({status: 500})
//   })
// });
// router.post('/delete/clPic', function (req, res, next) {
//   Note.destroy({where:{id:req.body.id}}).then(function(){
//     res.send({status:200})
//   }).catch(function(){
//     res.send({status: 500})
//   })
// });
module.exports = router;
