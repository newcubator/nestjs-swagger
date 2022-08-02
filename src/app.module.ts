import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SomeController } from './some.controller';

@Module({
  imports: [],
  controllers: [AppController, SomeController],
  providers: [AppService],
})
export class AppModule {}
