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
const path = require('path')
const routes = require("./route");
const cors = require("cors");
require("./src/app/db/mysql");
const port = process.env.PORT || 3000;
routes.map(route => {
  app.use(route.path, route.handler);
});
var corsOptions = {
  origin: '*',
 methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true,
    optionsSuccessStatus: 200 
}
app.use(cors(corsOptions));

const publicDirectoryPath = path.join(__dirname, '/uploads')

app.use(express.static(publicDirectoryPath))

const helmet = require('helmet')
// const CronJob = require('cron').CronJob;
var xss = require("xss");
app.use(helmet.xssFilter())
app.use(helmet.frameguard())

app.get('/', function (req, res) {
  res.status(200).send("Welcome  to app");
});
const hostname="comvalitsolutions.tech"
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})