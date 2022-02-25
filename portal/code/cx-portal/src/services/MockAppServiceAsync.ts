import { testAppData } from '../test/data/AppData'
import { App } from '../types/AppTypes'

export function getApps() {
  return new Promise<App[]>((resolve) =>
    setTimeout(() => resolve(testAppData), 500)
  )
}

export function getApp(id: string) {
  return new Promise<App>((resolve) =>
    setTimeout(
      () => resolve(testAppData.filter((app) => app.id === id)[0]),
      500
    )
  )
}
