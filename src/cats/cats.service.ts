import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cat } from './entities/cat.entity';
import { Repository } from 'typeorm';
import { Breed } from 'src/breeds/entities/breed.entity';

@Injectable()
export class CatsService {

  constructor(
    @InjectRepository(Cat)
    private catRepository: Repository<Cat>,

    @InjectRepository(Breed)
    private breedRepository: Repository<Breed>,

  ){ }

  async create(createCatDto: CreateCatDto) {
    const breed = await this.breedRepository.findOneBy({name: createCatDto.breed,}); //buscamos la raza del gato por su id
  
    if (!breed) {
      throw new BadRequestException('Breed not found');
    }

    const cat = this.catRepository.create({
      name: createCatDto.name,
      age: createCatDto.age,
      breed,
    });
    
    return await this.catRepository.save(cat); //guardamos el gato en la base de datos
      
  }

  //encrontrar todos los gatos
  async findAll() {
   return await this.catRepository.find(); //find() es un metodo de typeORM que nos permite encontrar todos los gatos
  }

  async findOne(id: number) {
  //  return await this.catRepository.findOneBy({id})
  return;
  }

  async update(id: number, updateCatDto: UpdateCatDto) {
   // return await this.catRepository.update(id, updateCatDto); //update() es un metodo de typeORM que nos permite actualizar un objeto en la base de datos
    //actualiza el gato con el id recibido y los datos del DTO
    //si el gato no existe, no se actualiza nada y no se lanza un error
    //si queremos lanzar un error si el gato no existe, debemos buscarlo primero con findOne() y luego actualizarlo
    return;
  }

  async remove(id: number) {
   // return await this.catRepository.softDelete(id); //softDelete() es un metodo de typeORM que nos permite eliminar un objeto de forma suave, es decir, no lo elimina fisicamente, sino que lo marca como eliminado
    //esto es util para no perder la informacion del gato eliminado, ya que se guarda la fecha de eliminacion en el campo deletedAt
    //para eliminar fisicamente un objeto, se usa el metodo delete()
    return;
  }
}
