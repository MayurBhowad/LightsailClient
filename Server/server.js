const express = require('express'),
      bodyparser = require('body-parser'),
      cors = require('cors'),
      mongoose = require('mongoose'),
      path = require('path');

      config = require('./db');

const businessRoute = require('./business.route');
const app = express();
app.use(bodyparser.json());
app.use(cors());
// let port = process.env.PORT || 4000;


mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);

app.use('/business', businessRoute);
app.get('/',(req, res) => {
  res.send('yoooooooooooooooooooooooo');
});

const server = app.listen(4000);
