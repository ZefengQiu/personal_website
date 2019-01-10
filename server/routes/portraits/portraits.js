const express = require('express');

const router = express.Router();

module.exports = () => {
    router.get('/', function(req, res) {
        return res.render('portraits', {
            page: 'Portraits'
        });
    });

    router.get('/:name', function(req, res) {
        return res.render('portraits/detail', {
            page: req.params.name,
        });
    });

    return router;
};