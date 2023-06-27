import { PartialType } from '@nestjs/mapped-types';
import { CreateNinjaDto } from './create-ninja.dto';

export default class UpdateNinjaDto extends PartialType(CreateNinjaDto) {}
