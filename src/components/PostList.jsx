import React, { useContext } from 'react'
import Post from './Post.jsx'
import { PostList as PostListData} from '../store/post-list-store.jsx'

const PostList = () => {
  const {postList} = useContext  (PostListData)
  console.log(postList);
  
  return (
    <>
    {postList.map((post)  => <Post/>)}
    </>
  )
}

export default PostList