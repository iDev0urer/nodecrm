"use strict";

const express = require('express'),
      router = express.Router(),
      passport = require('passport');

/* GET users listing. */
router.get('/login',
           function(req, res, next) {
               res.send('Login page');
});

router.post('/login',
         passport.authenticate('local', { failureRedirect: '/auth/login' }),
         function(req, res) {
             res.redirect('/dashboard');
         });

module.exports = router;
