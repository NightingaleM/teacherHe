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



module.exports = router;
