const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const { type, data } = req.body;
  if (type === "CommentCreated") {
    const { content } = data;
  }
  res.send({});
});

app.listen(4003, () => {
  console.log("Listening on 4003");
});
