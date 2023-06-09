import { PartialType } from '@nestjs/mapped-types';
import { CreateFormationDto } from './create-formation.dto';

export class UpdateFormationDto extends PartialType(CreateFormationDto) {
  readonly name: string;
  readonly instructor: string;
}
