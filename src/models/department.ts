const mongoose = require('../config/database');


const {Schema} = mongoose;

const departmentSchema = new mongoose.Schema({
    name : String,
});

const Department = mongoose.model('Department', departmentSchema);

export default Department;