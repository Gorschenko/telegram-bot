import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config/dist';
import { getTelegramConfig } from './configs/telegram.config';
import { TelegramModule } from './telegram/telegram.module';
import { TestModule } from './test/test.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TestModule,
    TelegramModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getTelegramConfig,
    }),
  ],
})
export class AppModule {}
