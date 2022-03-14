import { createSlice } from '@reduxjs/toolkit'
import { postsCallBegan } from './postsAPI'

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    list: [],
    loading: false,
  },
  reducers: {
    postsRequested: (posts) => {
      posts.loading = true
    },

    postsReceived: (posts, action) => {
      posts.list = action.payload
      posts.loading = false
    },

    postsRequestFailed: (posts) => {
      posts.loading = false
    },
  },
})

export default postsSlice

const { postsRequested, postsReceived, postsRequestFailed } = postsSlice.actions

const url = '/posts'

export const loadPosts = () => (dispatch) => {
  return dispatch(
    postsCallBegan({
      url,
      onStart: postsRequested.type,
      onSuccess: postsReceived.type,
      onError: postsRequestFailed.type,
    })
  )
}
