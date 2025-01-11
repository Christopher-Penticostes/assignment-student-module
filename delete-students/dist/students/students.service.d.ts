import { Repository } from 'typeorm';
import { Student } from './student.entity';
export declare class StudentsService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    remove(id: number): Promise<Student>;
}
