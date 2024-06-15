import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';
import { Position } from '../domain/position';

export class PositionDto implements Position {
  @ApiProperty()
  @IsNumber()
  id: number;
}
