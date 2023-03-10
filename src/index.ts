import { Container, ContainerModule, interfaces } from 'inversify'
import { App } from './app'
import { ConfigService } from './config/config.service'
import { IConfigService } from './config/config.service.interface'
import { TYPES } from './types'

export const appBildings = new ContainerModule((bind: interfaces.Bind) => {
  bind<App>(TYPES.Application).to(App)
  bind<IConfigService>(TYPES.ConfigService).to(ConfigService).inSingletonScope()
})

interface IBootstrapReturn {
  appContainer: Container
  app: App
}

const bootstrap = (): IBootstrapReturn => {
  const appContainer = new Container()
  appContainer.load(appBildings)
  const app = appContainer.get<App>(TYPES.Application)
  app.init()

  return {
    app,
    appContainer,
  }
}

export const { app, appContainer } = bootstrap()
