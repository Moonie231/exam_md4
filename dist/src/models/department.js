"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('../config/database');
const { Schema } = mongoose;
const departmentSchema = new mongoose.Schema({
    name: String,
});
const Department = mongoose.model('Department', departmentSchema);
exports.default = Department;
//# sourceMappingURL=department.js.map