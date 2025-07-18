//mapiar la informacion que va a llegar desde el cliente, hacemos las validaciones necesarias

import { IsInt, IsOptional, IsPositive, IsString, MinLength } from "class-validator";

export class CreateCatDto {
    @IsString()
    @MinLength(3)
    name: string;

    @IsInt()
    @IsPositive()
    age: number;

    @IsString()
    @IsOptional()
    breed: string;
}
