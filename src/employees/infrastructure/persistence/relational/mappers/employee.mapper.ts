import { Employee } from '../../../../domain/employee';
import { EmployeeEntity } from '../entities/employee.entity';

export class EmployeeMapper {
  static toDomain(raw: EmployeeEntity): Employee {
    const employee = new Employee();
    employee.id = raw.id;
    employee.name = raw.name;
    employee.positionId = raw.positionId;
    employee.positionName = raw.positionName;
    if (raw.parentId && typeof raw.parentId === 'number') {
      employee.parentId = raw.parentId;
    }
    employee.createdAt = raw.createdAt;
    employee.updatedAt = raw.updatedAt;
    employee.deletedAt = raw.deletedAt;
    return employee;
  }

  static toPersistence(employee: Employee): EmployeeEntity {
    const employeeEntity = new EmployeeEntity();
    if (employee.id && typeof employee.id === 'number') {
      employeeEntity.id = employee.id;
    }
    employeeEntity.name = employee.name;
    employeeEntity.positionId = employee.positionId;
    employeeEntity.positionName = employee.positionName;
    if (employee.parentId && typeof employee.parentId === 'number') {
      employeeEntity.parentId = employee.parentId;
    }
    employeeEntity.createdAt = employee.createdAt;
    employeeEntity.updatedAt = employee.updatedAt;
    employeeEntity.deletedAt = employee.deletedAt;
    return employeeEntity;
  }
}
