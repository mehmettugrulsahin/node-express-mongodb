var _ = require('lodash');

var uri = 'mongodb://localhost:27017/test';

var mongoose = require('mongoose');
mongoose.connect(uri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('db connected');
});

var userSchema = mongoose.Schema({
  username: String,
  gender: String,
  name: {
    title: String,
    first: String,
    last: String
  },
  location: {
    street: String,
    city: String,
    state: String,
    zip: Number
  }
});

// define virtual getter
userSchema.virtual('name.full').get(function () {
  return _.startCase(this.name.first + ' ' + this.name.last);
});

// define virtual setter
userSchema.virtual('name.full').set(function (value) {
  var bits = value.split(' ');
  this.name.first = bits[0];
  this.name.last = bits[1];
});

// export an object called user
// which we will get back calling mongoose.model
// by pasing in the name of the model 'User'
// and the schema.

// mongoose wil use that name and lowercase it 
// and make it plural to find the collection
// the fact that we are calling this model 'User'
// lets mongo know to use the 'users' collection.
exports.User = mongoose.model('User', userSchema);

// test connection -> node db.js
/*
exports.User.find({}, function (err, users) {
  console.log(users)
})
*/