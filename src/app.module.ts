import { Module } from '@nestjs/common';
import { TelegramModule } from './telegram/telegram.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [TelegramModule, TestModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
