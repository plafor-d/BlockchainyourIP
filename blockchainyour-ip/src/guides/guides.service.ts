import { Injectable } from '@nestjs/common';
import { CreateGuideDto } from './dto/create-guide.dto';
import { UpdateGuideDto } from './dto/update-guide.dto';
import { Repository } from 'typeorm';
import { Guide } from './entities/guide.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GuidesService {
  constructor(
    @InjectRepository(Guide)
    private guidesRepository: Repository<Guide>,

  ) { }

  create(createGuideDto: CreateGuideDto) {
    const guide = new Guide();
    guide.title = createGuideDto.title;
    guide.summary = createGuideDto.summary;
    guide.author = createGuideDto.author;
    guide.rating = createGuideDto.rating;
    return this.guidesRepository.save(guide);
  }

  findAll() {
    return this.guidesRepository.find();
  }

  findOne(id: number) {
    return this.guidesRepository.findOneBy({ id });
  }

  update(id: number, updateGuideDto: UpdateGuideDto) {
    return `This action updates a #${id} guide`;
  }

  remove(id: number) {
    return this.guidesRepository.delete(id);
  }
}
