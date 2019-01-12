
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3005;
const cors = require('cors');
const logger = require('morgan');
const router = require('./routes');

require('babel-core/register');
require('babel-polyfill');

logger('tiny');
// body-parser
app.use(
  cors({
    allowedHeaders: 'Content-Type, authorization',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// serve static assets
app.use(express.static(path.join(__dirname, '../../dist/')));

app.use(router);


app.listen(port, () => console.log(`server listening on port ${port}`));


// const express = require('express');
// const router = express.Router();
// const app = express();
// const bodyParser = require('body-parser');
// require('babel-polyfill');
// const path = require('path');

// const port = 3005;

// app.use(router);

// app.use(bodyParser.urlencoded({ extended: false }))

// app.use(bodyParser.json());
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });


// app.get('/', express.static(path.join(__dirname, 'dist/public')))

// app.listen(port, console.log(`server listening on ${port}`))
