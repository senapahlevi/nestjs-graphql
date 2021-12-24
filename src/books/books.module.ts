import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
  //books controller butuh getAllBooks dari BooksService bisa karena provider itu bisa inject pake depedencies injection ke semua module contoh ke BooksController
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
