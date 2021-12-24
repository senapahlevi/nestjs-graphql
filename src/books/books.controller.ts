import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { BooksService } from './books.service';
import { v4 as uuidv4 } from 'uuid';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
//controller tuh cuma nerima request dan response gitu bersih dari si service
//controller proses validasi juga disini
@Controller('books')
export class BooksController {
  //instance nya udah kenal ini tipe data tuh setelah
  //: jadi dia tau tipe data BooksService dari si providers inject ke mari sini
  constructor(private booksService: BooksService) {}
  @Get() //ini kalo  mau ambil nama tertentu tambahin query
  getBooks(
    @Query('title') title: string,
    @Query('author') author: string,
    @Query('category') category: string,
  ) {
    return this.booksService.getBooks(title, author, category);
  }

  /*
  @Get()
  //ini semisal kalo mau search all books
  getBooksz() {
    return this.booksService.getBooksz();
  }
*/
  @Get('/:id')
  getBook(@Param('id') id: string) {
    return this.booksService.getBook(id);
  }
  @Post() //versi ada dto
  createBook(@Body() payload: CreateBookDto) {
    console.log(payload);
    return this.booksService.createBook(payload);
  }
  @Post() //versi ada dto
  updateBook(@Param('id') id: string, @Body() payload: UpdateBookDto) {
    return this.booksService.updateBook(id, payload);
  }

  /*
  //ini kalo ga make dto jadi wajib nampilin daleman nya nah yang versi dto liat dibawah
  @Post()
  createBook(
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('category') category: string,
  ) {
    return this.booksService.createBook(title, author, category);
  }
  */
  /*
   //ini kalo ga make dto jadi wajib nampilin daleman nya nah yang versi dto liat dibawah
  @Put('/:id')
  updateBook(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('author') author: string,
    @Body('category') category: string,
  ) {
    return this.booksService.updateBook(id, title, author, category);
  }
  */
  @Delete('/:id')
  deleteBook(@Param('id') id: string) {
    return this.booksService.deleteBook(id);
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
