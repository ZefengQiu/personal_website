const express = require('express');
const craeteError = require('http-errors');
const path = require('path');
const configs = require('./config');
const app = express();

const config = configs[app.get('env')];
const routes = require('./routes/router');

app.set('view engine', 'pug');
if (app.get('env') === 'development') {
    app.locals.pretty = true;
}

app.set('views', path.join(__dirname, './views'));
app.locals.title = config.sitename;

app.use((req, res, next) => {
    res.locals.rendertime = new Date();
    return next();
});

app.use(express.static('./public'));
app.use('/', routes());

app.use((req, res, next) => {
   return next(craeteError(404, 'File is not found'));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    const status = err.status || 500;
    res.locals.status = status
    res.locals.error = req.app.get('/env') ==='development' ? err : {};
    res.status(status);
    return res.render('error');
});

app.listen(3000);

module.export = app;