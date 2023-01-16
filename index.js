const express = require('express')
const app = express()
const router = express.Router();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
const routes = require("./route");
const cors = require("cors");
require("./src/app/db/mysql");
const port = process.env.PORT || 3000;
routes.map(route => {
  app.use(route.path, route.handler);
});
app.use(cors());
// const publicDirectoryPath = path.join(__dirname, '/public')

// app.use(express.static(publicDirectoryPath))

const helmet = require('helmet')
// const CronJob = require('cron').CronJob;
var xss = require("xss");
const path = require('path')
app.use(helmet.xssFilter())
app.use(helmet.frameguard())

app.get('/', function (req, res) {
  res.status(200).send("Welcome  to app");
});
const hostname="comvalitsolutions.tech"
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})