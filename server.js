require("dotenv").config();
const { response } = require("express");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`Hello world I am listening to the one and only Port ${PORT}`);
})

app.get('/dburl', (request, response) => {
    response.send(`My connection string is: ${process.env.DATABASE_URL}`)
  });

app.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
});