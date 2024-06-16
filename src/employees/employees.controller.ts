import {
  Controller,
  Get,
  HttpStatus,
  Param,
  SerializeOptions,
  HttpCode,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './domain/employee';
import { NullableType } from 'src/utils/types/nullable.type';

import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Employees')
@Controller({
  path: 'employees',
  version: '1',
})
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @ApiOkResponse({
    type: Employee,
  })
  @SerializeOptions({
    groups: ['admin'],
  })
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiParam({
    name: 'id',
    type: String,
    required: true,
  })
  findOne(@Param('id') id: Employee['id']): Promise<NullableType<Employee>> {
    return this.employeesService.findById(id);
  }
}
