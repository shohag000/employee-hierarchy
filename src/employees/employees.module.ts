import { Module } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeesController } from './employees.controller';
import { RelationalEmployeePersistenceModule } from './infrastructure/persistence/relational/relational-persistence.module';

@Module({
  imports: [RelationalEmployeePersistenceModule],
  providers: [EmployeesService],
  controllers: [EmployeesController],
  exports: [EmployeesService, RelationalEmployeePersistenceModule],
})
export class EmployeesModule {}
