import { createAction } from '@reduxjs/toolkit'

export const postsCallBegan = createAction('posts/callBegan')
export const postsCallSuccess = createAction('posts/callSuccess')
export const postsCallFailed = createAction('posts/callFailed')
