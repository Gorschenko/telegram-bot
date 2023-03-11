import { config, DotenvConfigOutput, DotenvParseOutput } from 'dotenv'
import { IConfigService } from './config.service.interface'

export class ConfigService implements IConfigService {
  private config: DotenvParseOutput
  constructor() {
    const result: DotenvConfigOutput = config()
    if (result.error) {
      console.log(result.error)
    } else {
      this.config = result.parsed as DotenvParseOutput
    }
  }

  get<T extends string>(key: string): string {
    return this.config[key]
  }
}
