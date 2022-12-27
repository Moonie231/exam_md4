import Staff from '../models/staff';
import Department from "../models/department";
import department from "../models/department";


class StaffController{
    async index(req : any ,res : any,next) {
        try {
            let staff = await Staff.find().populate('department')
            let department = await Department.find()
            res.render('list',{
                data: staff,
                department: department
            })
        }
        catch (err){
            next(err);
        }
    }

    async showFormAdd(req, res) {
        let department = await Department.find()
        res.render('add', {department: department})
    }

    async AddStaff(req : any ,res : any){
        try{
         let staff = new Staff({
             name : req.body.name,
             code: req.body.code,
             age: req.body.age,
             salary: req.body.salary,
             department : req.body.department,
         })
            console.log(staff)
            await staff.save()
            console.log(staff.department)
            res.redirect('/staff');
        }
        catch (err){
            console.log(err.message)
            res.redirect('/staff/add');
        }
    }
    async showUpdateStaff(req : any ,res : any){
        const staff = await Staff.findOne({_id: req.params.id});
        let department = await Department.find()
        res.render("update", {data: staff, department: department});

    }
    async update(req: any,res : any,next) {
        try{
            let id = req.params.id
            await Staff.findOneAndUpdate({_id: id},
                {$set: {
                        name: req.body.name,
                        code: req.body.code,
                        age: req.body.age,
                        salary: req.body.salary,
                        department: req.body.department
                    }
                })
            res.redirect('/staff');
        }
        catch(err){
            console.log(err.message);

        }
    }
    async delete(req : any,res : any){

        let id = req.params.id;
        await Staff.deleteOne({_id : id},)
        res.redirect('/staff');
    }

    async filter(req, res) {
        let id = req.params.id
        let staff = await Staff.find({department: id}).populate('department')
        let department = await Department.find()
        res.render("list", {data: staff, department: department})
    }
}


export default StaffController;