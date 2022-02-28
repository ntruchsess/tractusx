import { combineReducers } from 'redux'
import appsSlice from './apps/apps'
import postsSlice from './posts/posts'

const rootReducer = combineReducers({
  apps: appsSlice.reducer,
  posts: postsSlice.reducer,
})

export default rootReducer
