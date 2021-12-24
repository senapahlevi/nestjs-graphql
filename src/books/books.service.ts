import { Delete, Injectable, NotFoundException, Param } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

//service ini adalah provider yak tempat bisnis logic ditempatkan kalo laravel di controller
@Injectable()
export class BooksService {
  //ini data source
  private books: any[] = [];
  /*
  //ini service buat dari get books ini semisal kalo mau search all books
  getBooksz(): any[] {
    return this.books;
  }
  */
  // ini buat nyari query khusus alias filter misal gw search author namanya budi aja yg ditampilkan

  getBooks(title: string, author: string, category: string): any[] {
    const books = this.books.filter((book) => {
      let isMatch = true;
      if (title && book.title != title) {
        isMatch = false;
      }
      if (author && book.author != author) {
        isMatch = false;
      }
      if (category && book.category != category) {
        isMatch = false;
      }
      return isMatch; //jika cocok category dan book. ini maka ya bener namipilin bukan array kosongan
    });
    return books;
  }

  getBook(id: string) {
    const bookIdx = this.findBookById(id);
    return this.books[bookIdx];
    //ini fungsi nya ketika dapet id dari si findBook kita copas terus cocokin muncul kah
    //dari ini ngambil nya {{host}}/books/:id ntar muncul form otomatis di params postman nya bukan body postman
  }
  /*
  //ini versi non dto wajib kek gini yak
  createBook(title: string, author: string, category: string) {
    this.books.push({
      id: uuidv4(),
      title,
      author,
      category,
    });
  }
  */
  createBook(createBookDto: CreateBookDto) {
    //versi dto
    const { title, author, category, year } = createBookDto;
    this.books.push({
      id: uuidv4(),
      title,
      author,
      category,
      year,
    });
  }
  updateBook(id: string, updateBookDto: UpdateBookDto) {
    const { title, author, category, year } = updateBookDto;
    const bookIdx = this.findBookById(id);
    this.books[bookIdx].title = title;
    this.books[bookIdx].author = author;
    this.books[bookIdx].category = category;
    this.books[bookIdx].year = year;
  }
  /*
  //versi non dto
  updateBook(id: string, title: string, author: string, category: string) {
    const bookIdx = this.findBookById(id);
    this.books[bookIdx].title = title;
    this.books[bookIdx].author = author;
    this.books[bookIdx].category = category;
  }
  */
  findBookById(id: string) {
    const bookIdx = this.books.findIndex((book) => book.id === id);
    if (bookIdx === -1) {
      //ini tuh error custom jangan sampe internal service error
      //kan malah bingung nanti
      throw new NotFoundException(`book with id ${id} is not found`);
    }
    return bookIdx;
  }
  //ini delete id yang spesifik trus deleten nya cuman sekali
  deleteBook(id: string) {
    const bookIdx = this.findBookById(id);
    this.books.splice(bookIdx, 1);
  }
}
