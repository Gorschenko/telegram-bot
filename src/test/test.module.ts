import { Module } from '@nestjs/common';
import { TelegramModule } from 'src/telegram/telegram.module';
import { TestController } from './test.controller';

@Module({
  imports: [TelegramModule],
  controllers: [TestController],
})
export class TestModule {}
