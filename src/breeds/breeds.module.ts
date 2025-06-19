import { Module } from '@nestjs/common';
import { BreedsService } from './breeds.service';
import { BreedsController } from './breeds.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Breed } from './entities/breed.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Breed])], // Aquí puedes agregar las entidades que deseas usar
  controllers: [BreedsController],
  providers: [BreedsService],
  exports: [TypeOrmModule] //exportamos para que el modulo de gatos pueda usarlo
})
export class BreedsModule {}
