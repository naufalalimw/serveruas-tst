var express = require('express');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const swaggerUi = require('swagger-ui-express');
const cors = require('cors')
// const swaggerDocument = require('./routes/postman.json');
const mongoose = require('mongoose');
//const autoIncrement = require('mongoose-auto-increment');
mongoose.Promise = require('bluebird')
mongoose.set('useFindAndModify', false)
require('dotenv').config()


//mongo connect
mongoose.connect('mongodb+srv://naufalalimw:nalimw12@cluster0.kv1bh.mongodb.net/user?retryWrites=true&w=majority').then(
      db => {
        console.log('Connected to db server')
        console.log('Connection state: ' + mongoose.connection.readyState)
      },
      err => {
        console.error(err)
      }
    )
    .catch(err => {
      console.error(err.message)
    });

// router.use('/api-docs', swaggerUi.serve);
// router.get('/api-docs', swaggerUi.setup(swaggerDocument));


//MOngo
// var connection = mongoose.createConnection(process.env.MONGO_URL, {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
// autoIncrement.initialize(connection)
// const mongoClient = mongoose.connect(process.env.MONGO_URL, {
//   useCreateIndex: true,
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
// mongoClient
//   .then(
//     db => {
//       console.log('Connected to db server')
//       console.log('Connection state: ' + mongoose.connection.readyState)
//     },
//     err => {
//       console.error(err)
//     }
//   )
//   .catch(err => {
//     console.error(err.message)
//   });


const saldoRoutes = require('./routes/saldo.routes')
// App
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(bodyParser.raw())
app.use(cookieParser())
app.use(cors())
// // Swagger docs
// app.use('/api', swaggerUi.serve)
// app.get('/api', swaggerUi.setup(swaggerDocument))
// Use Routes
// saldoRoutes(app)

app.use(saldoRoutes)

module.exports = app;
