import { Controller, Get } from '@nestjs/common';
import { TelegramService } from 'src/telegram/telegram.service';

@Controller('test')
export class TestController {
  constructor(private readonly telegramService: TelegramService) {}

  @Get()
  async notify(): Promise<void> {
    return this.telegramService.sendMessage('test');
  }
}