import appsMW from './apps/appsMW'
import postsMW from './posts/postsMW'

const rootMiddleware = (getDefaultMiddleware: any) => [
  ...getDefaultMiddleware(),
  appsMW,
  postsMW,
]

export default rootMiddleware
