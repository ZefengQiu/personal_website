const express = require('express');

const router = express.Router();
const speakersRoutes = require('./speakers/speaker');
const landscapesRoutes = require('./landscapes/landscape');
const urbansRoutes = require('./urbans/urban');
const portraitsRoutes = require('./portraits/portraits');

module.exports = () => {
    router.get('/', function(req, res) {
        return res.render('index', {
            page: 'Home',
        });
     });

    //this is an example routes from sample projec
    router.use('/speakers', speakersRoutes());

    router.use('/landscapes', landscapesRoutes());
    router.use('/portraits', portraitsRoutes());
    router.use('/urbans', urbansRoutes());

    return router;
};