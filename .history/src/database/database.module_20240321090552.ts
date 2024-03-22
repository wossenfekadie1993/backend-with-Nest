import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
  providers: [],
//   exports: [...databaseProviders],
})
export class DatabaseModule {}