const express = require('express');
const morgan = require('morgan');
const { report } = require('process');
const cors = require('cors');
const app = express();

const {mongoose } = require('./database')
//Settings
app.set('port', process.env.port || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));


//Routes
app.use('/api/employees',require('./routes/employee.routes'))

//Starting the server
app.listen(app.get('port'), () =>{
    console.log('hi, port ', app.get('port'));
});

//app.get('api.employees'))
  // Add headers
//   app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  
//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  
//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  
//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);
  
//     // Pass to next layer of middleware
//     next();
//   });