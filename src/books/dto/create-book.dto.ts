/* eslint-disable prettier/prettier */
/*
transformasi dari data FE ke BE 
kalo express make interface kalo di nest.js make class
byngkus field daleman di controller.ts nya liat now 
misal @Post()
createbook(ini daleman) {return blabla bla}
*/
//INI VERSI GLOBAL VALIDATOR non Route validator CEK DI main.ts
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';
export class CreateBookDto {
  @IsNotEmpty() //ini string
  title: string;
  @IsNotEmpty()
  author: string;
  @IsNotEmpty()
  category: string;
  @IsNotEmpty() //ini kalo ditulis doang gak error tapi harusnya kan kita pengen cek int doang di year
  @IsInt() //ini doang kalo ditulis error lah? makanya kita konversi make class transform soalnya dicek console.log payload
  //payload nya year hasil console.log itu string malah absurd kan ? solusi @Type ke number dikonversi
  @Type(() => Number)
  year: string;
}
