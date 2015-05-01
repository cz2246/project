// Mongoose schemas, hard coded profiles for test purposes

var mongoose = require('mongoose'),
    crypto = require('crypto');

module.exports = function(config) {
mongoose.connect(config.db);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
  console.log('test db opened');
});

var userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  salt: String,
  hashed_pwd: String,
});

userSchema.methods = {
  authenticate: function (pwdM) {
    return hashPwd(this.salt, pwdM) === this.hashed_pwd;
  }
}

var User = mongoose.model('User', userSchema);

User.find({}).exec(function(err, collection) {
  if (collection.length === 0) {
    var salt, hash;
    salt = createSalt();
    hash = hashPwd(salt, 'Cem');
    User.create({firstName:'Cem',lastName:'Zorlular', username: 'Cem', salt: salt, hashed_pwd: hash});
    salt = createSalt();
    hash = hashPwd(salt, 'Jane');
    User.create({firstName:'Jane',lastName:'Doe', username: 'Jane', salt: salt, hashed_pwd: hash});
    salt = createSalt();
    hash = hashPwd(salt, 'John');
    User.create({firstName:'John',lastName:'Doe', username: 'John', salt: salt, hashed_pwd: hash});
  }
});

function createSalt() {
  return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt, pwd) {
  var hmac = crypto.createHmac('sha1', salt);
  return hmac.update(pwd).digest('hex');
}

}
