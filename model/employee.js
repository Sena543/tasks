const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
    employeeID: Number,
    employeeName: String,
    departmentID: String,
    salary: Number
});

Employees = mongoose.model('Employee', employeeSchema)

module.exports = Employees