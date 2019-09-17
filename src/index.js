var express = require('express');
import ConnectDB from "./config/conectDB";
import configView from "./config/viewEngine";

var app = express();

//Connect to DB
ConnectDB();

// Config view engine
configView(app);
app.get('/', (req, res) => {
  return res.render("main/master");
});
app.get('/login-register', (req, res) => {
  return res.render("auth/loginRegister");
});

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log('success', process.env.DB_CONNECTION);
});
