import {React , useContext, useRef} from 'react'
import {PostList} from '../store/post-list-store';

const CreatePost = () => {

  const { addPost } = useContext(PostList)

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault()
    const userId = userIdElement.current.value;
    const postTite = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(/(\s+)/);

    addPost(userId , postTite , postBody , reactions , tags)
  }
  

  return (
    <form className='create-post' onSubmit={handleSubmit}>

      <div className="mb-3">
        <label htmlFor="userId" className="form-label">Enter your User ID here:</label>
        <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder='Enter your User ID' />
      </div>

      <div className="mb-3">
        <label htmlFor="Title" className="form-label">Post Title</label>
        <input type="text" ref={postTitleElement} className="form-control" id="title" placeholder='How are you Felling today...' />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">Post Content</label>
        <textarea type="text" ref={postBodyElement} className="form-control" id="body" placeholder='Tell us more about this...' rows="4" />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Number of Reactions</label>
        <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder='How many people reacted this post.. ' />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Enter your hashtags here...</label>
        <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder='Please enter tags using space' />
      </div>

      <button type="submit" className="btn btn-primary">Post</button>
    </form>
  )
}

export default CreatePost