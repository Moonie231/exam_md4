const mongoose = require('../config/database');


const {Schema} = mongoose;

const staffSchema = new mongoose.Schema({
    name : String,
    code: String,
    age : Number,
    salary: Number,
    department :{ type:Schema.Types.ObjectId, ref: "Department" },
});

const Staff = mongoose.model('Staff', staffSchema);

export default Staff;