import { Injectable } from '@nestjs/common';
import { EmployeeRepository } from './infrastructure/persistence/employee.repository';
import { Employee } from './domain/employee';
import { NullableType } from 'src/utils/types/nullable.type';

@Injectable()
export class EmployeesService {
  constructor(private readonly employeesRepository: EmployeeRepository) {}

  findById(id: Employee['id']): Promise<NullableType<Employee>> {
    return this.employeesRepository.findById(id);
  }
}
