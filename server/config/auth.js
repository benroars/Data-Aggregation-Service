const session = require('express-session');

module.exports = (app) => {
  app.use(session({
    name: 'fitomo',
    secret: 'fitomo',
    resave: true,
    saveUninitialized: false,
    rolling: true,
  }));
};
