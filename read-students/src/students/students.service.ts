import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async findAll() {
    return await this.studentRepository.find();
  }

  async findOne(id: number) {
    const student = await this.studentRepository.findOneBy({ id });
    if (!student) {
      throw new NotFoundException('Student Not Found');
    }
    return student;
  }
}
