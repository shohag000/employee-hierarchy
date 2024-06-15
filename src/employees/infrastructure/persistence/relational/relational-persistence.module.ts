import { Module } from '@nestjs/common';
import { EmployeeRepository } from '../employee.repository';
import { EmployeesRelationalRepository } from './repositories/employee.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeEntity } from './entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeEntity])],
  providers: [
    {
      provide: EmployeeRepository,
      useClass: EmployeesRelationalRepository,
    },
  ],
  exports: [EmployeeRepository],
})
export class RelationalEmployeePersistenceModule {}
