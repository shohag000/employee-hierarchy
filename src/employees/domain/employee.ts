import { ApiResponseProperty } from '@nestjs/swagger';
import { Allow } from 'class-validator';

import { Entity, PrimaryGeneratedColumn, Tree } from 'typeorm';

@Entity()
@Tree('nested-set')
export class Employee {
  @Allow()
  @PrimaryGeneratedColumn()
  @ApiResponseProperty({
    type: Number,
  })
  id: number;

  @Allow()
  @ApiResponseProperty({
    type: Number,
  })
  name: string;

  @Allow()
  @ApiResponseProperty({
    type: Number,
  })
  positionId: number;

  @Allow()
  @ApiResponseProperty({
    type: Number,
  })
  positionName: string;

  @Allow()
  @ApiResponseProperty({
    type: Number,
  })
  parentId: number | null;

  @Allow()
  @ApiResponseProperty({
    type: Employee,
  })
  children: Employee[];

  @ApiResponseProperty()
  createdAt: Date;

  @ApiResponseProperty()
  updatedAt: Date;

  @ApiResponseProperty()
  deletedAt: Date;
}
