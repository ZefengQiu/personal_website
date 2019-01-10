const express = require('express');

const router = express.Router();
const speakersRoutes = require('./speakers/speaker');
const landscapesRoutes = require('./landscapes/landscape');

module.exports = () => {
  router.get('/', function(req, res) {
      return res.render('index', {
          page: 'Home',
      });
  });

  router.use('/landscapes', landscapesRoutes());
  router.use('/speakers', speakersRoutes());

  return router;
};