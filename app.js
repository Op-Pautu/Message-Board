const express = require('express');
const logger = require('morgan');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

const indexRouter = require('./routes/index');
app.use('/', indexRouter);
app.use(function (req, res, next) {
  next(createError(404));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log('Listening on port 3000');
});
