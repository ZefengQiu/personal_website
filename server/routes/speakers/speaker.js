const express = require('express');

const router = express.Router();

module.exports = () => {
    router.get('/', function(req, res) {
        return res.render('speakers', {
            page: 'All Speakers'
        });
    });

    router.get('/:name', function(req, res) {
        return res.render('speakers/detail', {
            page: req.params.name,
        });
    });

    return router;
};