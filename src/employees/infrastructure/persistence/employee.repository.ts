import { NullableType } from '../../../utils/types/nullable.type';
import { Employee } from '../../domain/employee';

export abstract class EmployeeRepository {
  abstract create(
    data: Omit<Employee, 'id' | 'createdAt' | 'deletedAt' | 'updatedAt'>,
  ): Promise<Employee>;

  abstract findById(id: Employee['id']): Promise<NullableType<Employee>>;
}
