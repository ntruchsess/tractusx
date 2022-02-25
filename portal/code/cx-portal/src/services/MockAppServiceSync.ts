import { testAppData } from '../test/data/AppData'

export function getApps() {
  return testAppData
}

export function getApp(id: string) {
  return testAppData.filter((app) => app.id === id)[0]
}
