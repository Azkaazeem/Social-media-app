import { createContext, useReducer } from 'react'

export const PostList = createContext({
  postList: [],
  addPost: () => { },
  deletePost: () => { },
});

const postListreducer = (currPostList, action) => {
  return currPostList;
}

const PostListProvider = (children) => {

  const [postList, DispatchPostList] = useReducer(postListreducer, DEFAULT_POST_LIST);

  const addPost = () => {

  }

  const deletePost = () => {

  }

  return (
    <>
      <PostList.Provider value={{
        postList, addPost, deletePost,
      }}>{children}</PostList.Provider>
    </>
  )
}

const DEFAULT_POST_LIST = [{
  id: "1",
  title: "Going to Kashmir",
  body: "Hi friends, I am going to kashmir for my vacations. Hope to enjoy a lot. Peace out.",
  reactions: 2,
  userId: "Azka",
  tags: ["vacation", "Kashmir", "enjoy"],
},
{
  id: "2",
  title: "Graduation complete",
  body: "I am soooooooo happy with this passing no",
  reactions: 1000,
  userId: "Hamna",
  tags: ["Complete grad", "graduation", "pass"],
}
]

export default PostListProvider;