const mongoose = require('mongoose');
const {Schema} = mongoose;

//Nombre, apellido, identificación, tipo de contrato, 
//fecha de nacimiento, dirección, teléfono, email
const contractSchema = new Schema(
    {
        id: {type: String, required: true},
        name: {type: String, required: true },
        dateb: {type: Date, required: true },
        address: {type: String, required: true },
        tel: {type: String, required: true },
        email: {type: String, required:true},
        enterprise: {type: String, required:true},
        nob: {type: String, required:true},//Obra asociada al contratista
        hourob: {type: String, required: true },//Horas para cada empleados de la obra de este contratista
        dayinit: {type: String, required: true }//Día inicio obra para los N empleados asociados
                
        
            
    });

module.exports = mongoose.model('Contract', contractSchema);



