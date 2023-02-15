const mongoose = require('mongoose');
const { Schema } = mongoose;

const departmentSchema = new Schema({
    departmentName: String,
    departmentID: Number,
    departmentLocation: String
});

Department = mongoose.model('Department', departmentSchema)

module.exports = Department