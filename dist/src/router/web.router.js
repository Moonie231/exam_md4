"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const staff_controller_1 = __importDefault(require("../controller/staff.controller"));
const routes = express_1.default.Router();
const staffController = new staff_controller_1.default();
routes.get('/staff', staffController.index);
routes.get('/staff/add', staffController.showFormAdd);
routes.post('/staff/add', staffController.AddStaff);
routes.get('/staff/update/:id', staffController.showUpdateStaff);
routes.post('/staff/update/:id', staffController.update);
routes.get('/staff/:id/delete', staffController.delete);
routes.get('/staff/:id', staffController.filter);
exports.default = routes;
//# sourceMappingURL=web.router.js.map