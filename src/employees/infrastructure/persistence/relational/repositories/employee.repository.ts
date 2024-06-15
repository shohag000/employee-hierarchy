import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { TreeRepository } from 'typeorm';
import { EmployeeEntity } from '../entities/employee.entity';
import { NullableType } from '../../../../../utils/types/nullable.type';
import { Employee } from '../../../../domain/employee';
import { EmployeeRepository } from '../../employee.repository';
import { EmployeeMapper } from '../mappers/employee.mapper';

@Injectable()
export class EmployeesRelationalRepository implements EmployeeRepository {
  constructor(
    @InjectRepository(EmployeeEntity)
    private readonly employeesRepository: TreeRepository<EmployeeEntity>,
  ) {}

  async create(data: Employee): Promise<Employee> {
    const persistenceModel = EmployeeMapper.toPersistence(data);
    const newEntity = await this.employeesRepository.save(
      this.employeesRepository.create(persistenceModel),
    );
    return EmployeeMapper.toDomain(newEntity);
  }

  async findById(id: Employee['id']): Promise<NullableType<Employee>> {
    const entity = await this.employeesRepository.findOne({
      where: { id: Number(id) },
    });

    const hierarchy =
      await this.employeesRepository.findDescendantsTree(entity);

    return entity ? EmployeeMapper.toDomain(hierarchy) : null;
  }
}
