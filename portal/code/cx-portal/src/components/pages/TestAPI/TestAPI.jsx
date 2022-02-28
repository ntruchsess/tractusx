import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { api } from '../../../state/api'
import './TestAPI.css'

const TestAPI = () => {
  const dispatch = useDispatch()
  const posts = useSelector((state) => state.posts.list)

  useEffect(() => {
    dispatch(api.loadPosts())
  }, [dispatch])

  return (
    <div>
      <h1>TestAPI</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default TestAPI
