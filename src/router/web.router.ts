import express from 'express';
import StaffController from '../controller/staff.controller'

const routes = express.Router();

const staffController = new StaffController();


routes.get('/staff',staffController.index);
routes.get('/staff/add',staffController.showFormAdd);
routes.post('/staff/add',staffController.AddStaff);
routes.get('/staff/update/:id',staffController.showUpdateStaff);
routes.post('/staff/update/:id',staffController.update);
routes.get('/staff/:id/delete',staffController.delete);
routes.get('/staff/:id',staffController.filter);


export default routes;