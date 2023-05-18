import { PartialType } from '@nestjs/mapped-types';
import { CreateGuideDto } from './create-guide.dto';

export class UpdateGuideDto extends PartialType(CreateGuideDto) {
  readonly title: string;
  readonly author: string;
  readonly summary: string;
  readonly rating: number;
}
