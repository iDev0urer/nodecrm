"use strict";

const passport = require('passport'),
      User = require('../app/models/user.js'),
      LocalStrategy = require('passport-local'),
      WindowsStrategy = require('passport-windowsauth');

passport.use(new LocalStrategy({
    usernameField: 'email'
},
    function(email, password, done) {
        User.findOne({ email: email }, function (err, user) {
            if (err) { return done(err); }
            if (!user) { return done(null, false); }
            if (!user.verifyPassword(password)) { return done(null, false); }
            return done(null, user);
        });
    }
));

// // Windows Strategy for Authenticating With LDAP
// passport.use(new WindowsStrategy({
//     ldap: {
//         url:             'ldap://wellscordoba.wellscordobabank.com/DC=wellscordobabank,DC=com',
//         base:            'DC=wellscordobabank,DC=com',
//         bindDN:          'someAccount',
//         bindCredentials: 'andItsPass'
//     }
// }, function(profile, done){
//     User.findOrCreate({ waId: profile.id }, function (err, user) {
//         done(err, user);
//     });
// }));
