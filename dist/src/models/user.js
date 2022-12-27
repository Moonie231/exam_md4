"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('../config/database');
const { Schema } = mongoose;
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
});
Number,
;
;
const UserSchema = mongoose.model('User', userSchema);
exports.default = UserSchema;
//# sourceMappingURL=user.js.map