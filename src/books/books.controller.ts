import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('books')
export class BooksController {
  @Get('/:hellow')
  hello(@Param('hellow') hellow: string) {
    return `Hello ---watch dong ${hellow}`;
  }
}
/*
ini buat cari genre contoh gw tadi ngisi di body postman localhost:3000/books/ 
nah klik POST KLIK Body terus gw ngisi key:ketik genre value nya bebas misal sains
  @Post()
  createBooks(@Body('genre') genre: string) {
    return genre;
  }
  */
/*
ini kalo mau liat request dari client dan payload nya tipe nya ga tau string/int/bool jadi 
any aja nih contoh nya ntar muncul di terminal vscode
@Post()
createBook(@Body() payload: any) {
  console.log(payload);
}
*/
