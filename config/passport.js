// config/passport.js
var LocalStrategy = require("passport-local").Strategy;
var User = require("../models/users");

// expose this function to our app using module.exports
module.exports = function(passport) {
  // required for persistent login sessions
  // passport needs ability to serialize and unserialize users out of session
  // used to serialize the user for the session
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  // used to deserialize the user
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });
};
