import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Tree,
  TreeChildren,
  TreeParent,
  UpdateDateColumn,
} from 'typeorm';
import { Expose } from 'class-transformer';
import { ApiResponseProperty } from '@nestjs/swagger';
import { EntityRelationalHelper } from 'src/utils/relational-entity-helper';
import { Employee } from 'src/employees/domain/employee';

@Entity({
  name: 'employee',
})
@Tree('nested-set')
export class EmployeeEntity extends EntityRelationalHelper {
  @ApiResponseProperty({
    type: Number,
  })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiResponseProperty({
    type: String,
    example: 'John Doe',
  })
  @Column({ type: String })
  @Expose({ groups: ['public', 'admin'] })
  name: string;

  @ApiResponseProperty({
    type: Number,
  })
  @Column()
  positionId: number;

  @ApiResponseProperty({
    type: String,
    example: 'Senior software engineer',
  })
  @Column()
  positionName: string;

  @ApiResponseProperty({
    type: Number,
  })
  @Column()
  parentId: number;

  @ApiResponseProperty({
    type: () => Employee,
  })
  @TreeChildren()
  children: Employee[];

  @ApiResponseProperty({
    type: () => Employee,
  })
  @TreeParent()
  parent: Employee;

  @ApiResponseProperty()
  @CreateDateColumn()
  createdAt: Date;

  @ApiResponseProperty()
  @UpdateDateColumn()
  updatedAt: Date;

  @ApiResponseProperty()
  @DeleteDateColumn()
  deletedAt: Date;
}
