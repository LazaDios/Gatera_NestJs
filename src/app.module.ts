import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CatsModule } from "./cats/cats.module";
import { BreedsModule } from './breeds/breeds.module';

@Module({
  imports: [
        CatsModule,
        BreedsModule,
        TypeOrmModule.forRoot({
        type: "mysql",
        host: "localhost",
        port: 3307,
        username: "user_crud",
        password: "root",
        database: "db_crud",
        autoLoadEntities: true, // Carga automáticamente las entidades
        synchronize: true, // Solo para desarrollo, no usar en producción
        }),
        /*typeORMmodule, es para conectar la API a la BD*/   
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}