import { ITelegramOptions } from 'src/telegram/telegram.intrface';

export const getTelegramConfig = (): ITelegramOptions => {
  return {
    token: '',
    chatId: '',
  };
};
