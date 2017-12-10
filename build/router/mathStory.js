var express = require('express');
var router = express.Router();
var mathStory = require('../../backstage/model/mathStory').mathStory
router.post('/getTitle', function (req, res, next) {
  mathStory.findAll({
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
  mathStory.findAll({
    attributes:['EssayContent'],
    raw:true
  }).then(function(e){
    res.send(e)
  })
});


router.post('/getCt', function (req, res, next) {
  let essayId = req.query.id
  mathStory.findAll({
    where:{
      id:essayId
    },
    raw:true
  }).then(function(e){
    res.send(e)
  })
});
module.exports = router;
