import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Loader} from '../Loader'
import {fetchPosts} from '../redux/actions'
import Post from './Post'

export default () => {
  const dispatch = useDispatch() // Позволяет диспатчить action в store
  const posts = useSelector(state => state.posts.fetchedPosts) // Получаем fetchedPosts из postReducer.js
  const loading = useSelector(state => state.app.loading)

  if (loading) return <Loader />

  if (!posts.length)
    return (
      <button
        className="btn btn-primary"
        onClick={() => dispatch(fetchPosts())}
      >
        Загрузить
      </button>
    )
  return posts.map(post => <Post post={post} key={post.id} />)
}
