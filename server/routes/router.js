const express = require('express');

const router = express.Router();
const speakersRoutes = require('./speakers/speaker');
const feedbackRoutes = require('./feedbacks/feedback');

module.exports = () => {
  router.get('/', function(req, res) {
      return res.render('index', {
          page: 'Home',
      });
  });

  router.use('/speakers', speakersRoutes());
  router.use('/feedback', feedbackRoutes());

  return router;
};