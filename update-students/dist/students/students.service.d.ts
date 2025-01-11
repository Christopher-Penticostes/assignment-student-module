import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentsService {
    private studentRepository;
    constructor(studentRepository: Repository<Student>);
    update(id: number, UpdateStudentDto: UpdateStudentDto): Promise<import("typeorm").UpdateResult>;
}
