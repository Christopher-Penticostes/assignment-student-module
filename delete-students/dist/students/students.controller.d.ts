import { StudentsService } from './students.service';
export declare class StudentsController {
    private readonly studentsService;
    constructor(studentsService: StudentsService);
    remove(id: string): Promise<import("./student.entity").Student>;
}
