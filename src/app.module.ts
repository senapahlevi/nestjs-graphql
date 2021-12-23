import { Module } from '@nestjs/common';
/*
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceModule } from './invoice/invoice.module';
import { CustomerModule } from './customer/customer.module';
import { ConnectionOptions } from 'typeorm';
*/
import { BooksModule } from './books/books.module';
//import DatabaseConfig from './config/database.config';

@Module({
  imports: [BooksModule],
})
export class AppModule {}
