var express = require('express');
import ConnectDB from "./config/conectDB";
import configView from "./config/viewEngine";
import initRoutes from "./routes/web";

var app = express();

//Connect to DB
ConnectDB();

// Config view engine
configView(app);

// init router
initRoutes(app);

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log('success', process.env.DB_CONNECTION);
});
