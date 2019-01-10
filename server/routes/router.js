const express = require('express');

const router = express.Router();
const speakersRoutes = require('./speakers/speaker');
const landscapesRoutes = require('./landscapes/landscape');
const urbansRoutes = require('./urbans/urban');

module.exports = () => {
  router.get('/', function(req, res) {
      return res.render('index', {
          page: 'Home',
      });
  });

  router.use('/landscapes', landscapesRoutes());
  router.use('/speakers', speakersRoutes());
  router.use('/urbans', urbansRoutes());

  return router;
};