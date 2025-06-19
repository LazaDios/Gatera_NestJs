//configurar las propiedades de los gatos para guardar en la base de datos, usaremos las propiedades de typeORM
import e from "express";
import { Breed } from "src/breeds/entities/breed.entity";
import { Column, DeleteDateColumn, Entity, ManyToOne } from "typeorm";

@Entity()
export class Cat {
  //@PrimaryGeneratedColumn()
  @Column({ primary: true, generated: 'increment' })
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;


  @ManyToOne(() => Breed, (breed) => breed.id,{
    eager: true,
  })
  //relación muchos a uno, un gato puede tener una raza, pero una raza puede tener muchos gatos.
  breed: Breed;
  //la propiedad breed es de tipo Breed, que es la entidad de la raza del gato.

  @DeleteDateColumn()
  deletedAt: Date;
  //cada vez que se elimine un gato, se guardará la fecha de eliminación en este campo, para no perder la información del gato eliminado.
}
