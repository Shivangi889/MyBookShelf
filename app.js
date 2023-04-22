

const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/shelf.route");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); 

mongoose.connect('mongodb+srv://dbuser:SHIVqhaito@cluster0.az6vgev.mongodb.net/MYBOOKSHELF?retryWrites=true&w=majority')


  .then(() => console.log("Connected To Book Database"))
  .then(() => {
    app.listen(8000);
  })
  .catch((err) => console.log(err));
