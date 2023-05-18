import { Injectable } from '@nestjs/common';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { Formation } from './entities/formation.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FormationsService {
  constructor(
    @InjectRepository(Formation)
    private formationsRepository: Repository<Formation>,
  ) {}

  create(createFormationDto: CreateFormationDto) {
    const formation = new Formation();
    formation.name = createFormationDto.name;
    formation.instructor = createFormationDto.instructor;
    formation.date = createFormationDto.date;
    return this.formationsRepository.save(formation);
  }

  findAll() {
    return this.formationsRepository.find();
  }

  findOne(id: number) {
    return this.formationsRepository.findOneBy({ id });
  }

  update(id: number, updateFormationDto: UpdateFormationDto) {
    return `This action updates a #${id} formation`;
  }

  remove(id: number) {
    return this.formationsRepository.delete(id);
  }
}
