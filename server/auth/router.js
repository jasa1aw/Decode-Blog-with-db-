const express = require('express');
const router = express.Router();
const passport = require('passport');
const {signUp, signIn, logOut} = require('./controller');

router.post('/api/signup', signUp);
router.post('/api/signin', passport.authenticate('local', {failureRedirect: '/login?error=1'}), signIn);
router.get('/api/logout', logOut)

module.exports = router;