var express = require('express');
var router = express.Router();
var TeacherEssay = require('../../backstage/model/teacherEssay').TeacherEssay

router.post('/getCt', function (req, res, next) {
  let essayId = req.query.id
  TeacherEssay.findAll({
    where:{
      id:essayId
    },
    raw:true
  }).then(function(e){
    res.send(e)
  })

});

// router.post('/getCt', function (req, res, next) {
//   var a = Request.QueryString(essayId)
//   console.log(a)
//   TeacherEssay.findAll({
//     where:{
//       id:1
//     },
//     raw:true}).then(function(e){
//     res.send(e)
//   })
// });



module.exports = router;
