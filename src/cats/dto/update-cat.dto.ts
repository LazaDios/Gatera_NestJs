// el partialtype permite que los campos del DTO sean opcionales, es decir, no es necesario enviar todos los campos al actualizar un gato
import { PartialType } from '@nestjs/mapped-types';
import { CreateCatDto } from './create-cat.dto';

export class UpdateCatDto extends PartialType(CreateCatDto) {}
