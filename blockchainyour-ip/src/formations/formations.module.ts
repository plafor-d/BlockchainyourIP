import { Module } from '@nestjs/common';
import { FormationsService } from './formations.service';
import { FormationsController } from './formations.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Formation } from './entities/formation.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Formation])],
  controllers: [FormationsController],
  providers: [FormationsService]
})
export class FormationsModule {}
