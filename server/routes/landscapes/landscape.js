const express = require('express');

const router = express.Router();

module.exports = () => {
    router.get('/', function(req, res) {
        return res.render('landscapes', {
            page: 'Landscapes'
        });
    });

    router.get('/:name', function(req, res) {
        return res.render('landscape/detail', {
            page: req.params.name,
        });
    });

    return router;
};