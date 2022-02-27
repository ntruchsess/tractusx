import axios from 'axios'
import * as actions from './postsAPI'

const postsMW =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.postsCallBegan.type) return next(action)

    const { url, method, data, onStart, onSuccess, onError } = action.payload

    if (onStart) dispatch({ type: onStart })

    next(action)

    try {
      const response = await axios.request({
        baseURL: 'https://jsonplaceholder.typicode.com',
        url,
        method,
        data,
      })
      //dispatch(actions.apiCallSuccess(response.data));
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data })
    } catch (error) {
      //dispatch(actions.apiCallFailed(error.message));
      if (onError) dispatch({ type: onError, payload: error.message })
    }
  }

export default postsMW
