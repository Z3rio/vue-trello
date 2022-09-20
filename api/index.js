const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

require('dotenv').config()

const todolist = require('./db/todolist');

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "test!",
  });
});

app.get('/gettodoitems', (req, res) => {
  todolist.getAll().then((result) => {
      res.json(result);
  });
});

app.post('/addtodoitem', (req, res) => {
  console.log(req.body);
  todolist.create(req.body).then((message) => {
      res.json(message);
  }).catch((error) => {
      res.status(500);
      res.json(error);
  });
}); 

const port = process.env.port || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});
