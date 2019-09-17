var express = require('express');
import ConnectDB from "./config/conectDB";
import ContactModel from "../models/contact.model";

var app = express();

//Connect to DB
ConnectDB();

app.get('/hello', async (req, res) => {
  try {
    let item = {
      userId: '1324244',
      contactId: "5345345535",
    };
    console.log(ContactModel.createNew(item))
    let contact = await ContactModel.createNew(item);
    res.send(contact);
  } catch (e) {

  }
});

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log('success', process.env.APP_PORT);
});
