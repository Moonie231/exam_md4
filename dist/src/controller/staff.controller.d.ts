declare class StaffController {
    index(req: any, res: any, next: any): Promise<void>;
    showFormAdd(req: any, res: any): Promise<void>;
    AddStaff(req: any, res: any): Promise<void>;
    showUpdateStaff(req: any, res: any): Promise<void>;
    update(req: any, res: any, next: any): Promise<void>;
    delete(req: any, res: any): Promise<void>;
    filter(req: any, res: any): Promise<void>;
}
export default StaffController;
