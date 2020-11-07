const mongoose = require('mongoose');
const {Schema} = mongoose;

//Nombre, apellido, identificación, tipo de contrato, 
//fecha de nacimiento, dirección, teléfono, email
const employeeSchema = new Schema(
    {
        id: {type: String, required: true},
        name: {type: String, required: true },
        tcontrat: {type: String, required: true },
        dateb: {type: Date, required: true },
        address: {type: String, required: true },
        tel: {type: String, required: true },
        email: {type: String, required:true}    
    });

module.exports = mongoose.model('Employee', employeeSchema);



