import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";

import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';

@Module({
  imports: [
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

