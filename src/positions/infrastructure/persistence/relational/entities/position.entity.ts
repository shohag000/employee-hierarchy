import { Column, Entity, PrimaryColumn } from 'typeorm';
import { EntityRelationalHelper } from '../../../../../utils/relational-entity-helper';
import { ApiResponseProperty } from '@nestjs/swagger';

@Entity({
  name: 'position',
})
export class PositionEntity extends EntityRelationalHelper {
  @ApiResponseProperty({
    type: Number,
  })
  @PrimaryColumn()
  id: number;

  @ApiResponseProperty({
    type: String,
    example: 'Software eng',
  })
  @Column()
  name?: string;
}
