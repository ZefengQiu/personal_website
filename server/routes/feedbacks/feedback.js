const express = require('express');

const router = express.Router();

module.exports = () => {
    router.get('/', function(req, res) {
        return res.send('All feedback');
    });

    router.post('/', function(req, res) {
        return res.send('Form send');
    });

    return router;
};