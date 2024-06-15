import { IsNumber } from 'class-validator';

export class FindEmployeeByIdDto {
  @IsNumber()
  id: number;
}
