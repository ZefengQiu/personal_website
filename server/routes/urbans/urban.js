const express = require('express');

const router = express.Router();

module.exports = () => {
    router.get('/', function(req, res) {
        return res.render('urbans', {
            page: 'Urbans'
        });
    });

    router.get('/:name', function(req, res) {
        return res.render('urbans/detail', {
            page: req.params.name,
        });
    });

    return router;
};