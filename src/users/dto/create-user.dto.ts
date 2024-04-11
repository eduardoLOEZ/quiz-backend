import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsNumber()
  puntos: number;

  @ApiProperty()
  @IsBoolean()
  resultado: boolean;
}