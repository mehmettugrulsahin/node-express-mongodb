var express = require('express');
var helpers = require('./helpers');
var fs = require('fs');
var User = require('./db').User;

var router = express.Router({
  mergeParams: true
});

router.use(function (req, res, next) {
  console.log(req.method, 'for', req.params.username + ' at ' + req.path);
  next();
});

router.get('/', helpers.verifyUser, function (req, res) {
  var username = req.params.username;
  User.findOne({username: username}, function (err, user) {
    res.render('user', {
        user: user,
        address: user.location
      });
  });
});

// Error handling
router.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!');
});

router.put('/', function (req, res) {
  var username = req.params.username;
  
  // findOneAndUpdate is a specialized helper method
  // that mongoose provides
  // and it is not compatible with virtual setters
  // if you want to use a virtual setter then 
  // use findOne method instead
  User.findOne({username: username}, function (err, user) {
    if (err) console.error(err);
    user.name.full = req.body.name;
    user.location = req.body.location;  
    // call save function of the user document
    user.save(function () {
      res.end();
    });
  });
});

router.delete('/', function (req, res) {
  var fp = helpers.getUserFilePath(req.params.username);
  fs.unlinkSync(fp); // delete the file
  res.sendStatus(200);
});

module.exports = router;