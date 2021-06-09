import React from 'react'
import {connect} from 'react-redux'
import Post from './Post'

// За место posts теперь можно использовать syncPosts из mapStateToProps
// const Posts = ({posts}) => {
const Posts = ({syncPosts}) => {
  if (!syncPosts.length) return <p className="text-center">Постов пока нет</p>
  return syncPosts.map(post => <Post post={post} key={post.id} />)
}

// Преобразовывает стейты в пропсы. state.posts из rootReducer и .posts из возвращённого state в postsReducer
const mapStateToProps = state => {
  return {
    syncPosts: state.posts.posts,
  }
}

export default connect(mapStateToProps, null)(Posts)
// export default connect(null, null)(Posts)
