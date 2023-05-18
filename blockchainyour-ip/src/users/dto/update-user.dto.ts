import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  readonly email: string;
  readonly password: string;
  readonly firstname: string;
  readonly lastname: string;
}
