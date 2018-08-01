const express = require('express')
const app = express();

var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/v1/index');
var orderRouter = require('./routes/v1/orders');

app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/', indexRouter);
app.use('/orders', orderRouter);

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.json('{}');
});

app.listen(8080, () => {
	console.log('PO Service application listening on port 8080!')
});
