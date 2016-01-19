"use strict";

const express = require('express'),
      router = express.Router(),
      passport = require('passport');

/* GET users listing. */
router.get('/auth/login',
           function(req, res, next) {
               res.send('respond with a resource');
});

router.post('/auth/login',
         passport.authenticate('local', { failureRedirect: '/auth/login' }),
         function(req, res) {
             res.redirect('/dashboard');
         });

module.exports = router;
