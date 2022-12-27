"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const staff_1 = __importDefault(require("../models/staff"));
const department_1 = __importDefault(require("../models/department"));
class StaffController {
    async index(req, res, next) {
        try {
            let staff = await staff_1.default.find().populate('department');
            let department = await department_1.default.find();
            res.render('list', {
                data: staff,
                department: department
            });
        }
        catch (err) {
            next(err);
        }
    }
    async showFormAdd(req, res) {
        let department = await department_1.default.find();
        res.render('add', { department: department });
    }
    async AddStaff(req, res) {
        try {
            let staff = new staff_1.default({
                name: req.body.name,
                code: req.body.code,
                age: req.body.age,
                salary: req.body.salary,
                department: req.body.department,
            });
            console.log(staff);
            await staff.save();
            console.log(staff.department);
            res.redirect('/staff');
        }
        catch (err) {
            console.log(err.message);
            res.redirect('/staff/add');
        }
    }
    async showUpdateStaff(req, res) {
        const staff = await staff_1.default.findOne({ _id: req.params.id });
        let department = await department_1.default.find();
        res.render("update", { data: staff, department: department });
    }
    async update(req, res, next) {
        try {
            let id = req.params.id;
            await staff_1.default.findOneAndUpdate({ _id: id }, { $set: {
                    name: req.body.name,
                    code: req.body.code,
                    age: req.body.age,
                    salary: req.body.salary,
                    department: req.body.department
                }
            });
            res.redirect('/staff');
        }
        catch (err) {
            console.log(err.message);
        }
    }
    async delete(req, res) {
        let id = req.params.id;
        await staff_1.default.deleteOne({ _id: id });
        res.redirect('/staff');
    }
    async filter(req, res) {
        let id = req.params.id;
        let staff = await staff_1.default.find({ department: id }).populate('department');
        let department = await department_1.default.find();
        res.render("list", { data: staff, department: department });
    }
}
exports.default = StaffController;
//# sourceMappingURL=staff.controller.js.map