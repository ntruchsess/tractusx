import appsMW from './apps/appsMW'

const rootMiddleware = (getDefaultMiddleware: any) => {
  const dm = getDefaultMiddleware()
  console.log(dm)
  return [
    ...dm,
    appsMW,
  ]
}

export default rootMiddleware
