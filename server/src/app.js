const express = require('express');
const morgan = require('morgan');
const helmet = require("helmet");
const compression = require("compression");
const app = express();

// Init middleware
app.use(morgan('dev'));// for development
// app.use(morgan('combined'));// for production
app.use(helmet());
app.use(compression())
// Init database

//
app.get('/',(req, res, next) => {
    const data = 'hauphvn';
   return res.status(200).json({
       metadata: data.repeat(30000),
       message: 'Hi hauphvn'
   })
})

module.exports = app;
