const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

app.use(express.json());

//connect to server atlas mongo DB
//mongoose.connect('mongodb+srv://ajaychinmay0919:8hxFzZGsxzH4pTP9@cluster0.dlximhr.mongodb.net/employees?retryWrites=true&w=majority');


//connect to local mongo DB
mongoose.connect('mongodb://localhost:27017/employees');

// ...
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

// ...
app.use(Router);

app.listen(1000, () => {
  console.log("Server is running at port 1000");
});
