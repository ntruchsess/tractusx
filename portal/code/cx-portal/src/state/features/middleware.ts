import appsMW from './apps/appsMW'
import postsMW from './posts/postsMW'

const rootMiddleware = (getDefaultMiddleware: Function) => [
  ...getDefaultMiddleware(),
  appsMW,
  postsMW,
]

export default rootMiddleware
