import { ApiResponseProperty } from '@nestjs/swagger';
import { Allow } from 'class-validator';

export class Position {
  @Allow()
  @ApiResponseProperty({
    type: Number,
  })
  id: number;

  @Allow()
  @ApiResponseProperty({
    type: String,
    example: 'Software eng',
  })
  name?: string;
}
