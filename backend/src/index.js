require('dotenv').config()
const express = require('express')
const morgan = require("morgan");
const mongoose = require('mongoose')
const cors = require('cors')
const path = require("path");
const http = require('http')
const routes = require('./routes')

const app = express()
const server = http.Server(app)

mongoose.connect("mongodb+srv://" + process.env.DB_USER + ":" + process.env.DB_PASS + "@cluster0-lozjt.mongodb.net/" + process.env.DB_NAME + "?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

//add other middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);

app.use(routes)

server.listen(3000)