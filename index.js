const express = require('express')
const app = express()
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
const cors = require("cors");
var corsOptions = {
  origin: '*',
 methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true,
    optionsSuccessStatus: 200 
}
app.use(cors(corsOptions));
const path = require('path')

const publicDirectoryPath = path.join(__dirname, '/uploads')

app.use(express.static(publicDirectoryPath))
const router = express.Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./1.json');
const swaggerDocument2 = require('./2.json');
const swaggerDocument3 = require('./3.json');
const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['1.json'], // files containing annotations as above
};

const openapiSpecification = swaggerJsdoc(options);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument2));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument3));

const routes = require("./route");

require("./src/app/db/mysql");
const port = process.env.PORT || 3000;
routes.map(route => {
  app.use(route.path, route.handler);
});



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