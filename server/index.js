const express = require('express');
const morgan = require('morgan');
const { report } = require('process');
const app = express();

const {mongoose } = require('./database')
//Settings
app.set('port', process.env.port || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());


//Routes
app.use('/api/employees',require('./routes/employee.routes'))

//Starting the server
app.listen(app.get('port'), () =>{
    console.log('hi, port ', app.get('port'));
});

//app.get('api.employees'))