const express = require('express')
const app = express()
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
const router = express.Router();
const routes = require("./route");
routes.map(route => {
  app.use(route.path, route.handler);
});
const cors = require("cors");
var corsOptions = {
  origin: '*',
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions));
const path = require('path')

const publicDirectoryPath = path.join(__dirname, '/uploads')

app.use(express.static(publicDirectoryPath))

require("./src/app/db/mysql");
const port = process.env.PORT || 3000;




const helmet = require('helmet')
// const CronJob = require('cron').CronJob;
var xss = require("xss");
app.use(helmet.xssFilter())
app.use(helmet.frameguard())

app.get('/', function (req, res) {
  res.status(200).send("Welcome  to app");
});
app.listen(port, () => {
  console.log(`connected  ${port}`);
})