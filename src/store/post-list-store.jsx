import { createContext, useReducer } from 'react'

export const PostList = createContext({
  postList: [],
  addPost: () => { },
  deletePost: () => { },
});

const postListreducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id != action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currPostList]
  }
  return newPostList;
}

const PostListProvider = ({ children }) => {

  const [postList, DispatchPostList] = useReducer(postListreducer, DEFAULT_POST_LIST);

  const addPost = (userId, postTite, postBody, reactions, tags) => {
    DispatchPostList({
      type: "Edit_POST",
      payload: {
        id: Date.now(),
        title: userId,
        body: postTite,
        reactions: postBody,
        userId: reactions,
        tags: tags,
      }})
  }

  const deletePost = (postId) => {
    // console.log(`Delete post called for: ${postId}`);
    DispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      }
    })

  }


  return (
    <>
      <PostList.Provider value={{
        postList, addPost, deletePost,
      }}>{children}</PostList.Provider>
    </>
  )
}

const DEFAULT_POST_LIST = [
//   {
//   id: "1",
//   title: "Going to Kashmir",
//   body: "Hi friends, I am going to kashmir for my vacations. Hope to enjoy a lot. Peace out.",
//   reactions: 2,
//   userId: "Azka",
//   tags: ["vacation", "Kashmir", "enjoy"],
// },
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