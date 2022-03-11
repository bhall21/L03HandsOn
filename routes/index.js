var express = require('express');
var router = express.Router();
var storyLine = require('../models/storyLine');



router.get('/beginning', function(req, res, next) {
  let tale = storyLine.story.find(part => {
  return part.storyPart;
});
res.render('beginning', {tale});
console.log(req.url);
});
router.get('/middle', function(req, res, next) {
  let tale = storyLine.story.find(part => {
  return part.place ;
});
res.render('middle', {tale});
console.log(req.url);
});
router.get('/end', function(req, res, next) {
  let tale = storyLine.story.find(part => {
  return part.housing ;
});
res.render('end', {tale});
console.log(req.url);
});

module.exports = router;
