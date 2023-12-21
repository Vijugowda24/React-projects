import React, { useContext, useRef } from 'react'
import { PostListContext } from '../store/post-list-store';
import { Form, redirect, useNavigate } from 'react-router-dom';

function CreatePost() {
// const {addPost} = useContext(PostListContext);



  return (
    <Form className='create-post' method="POST">

  <div className="mb-3">
    <label htmlFor="userId" className="form-label">Enter your User Id</label>
    <input type="text" className="form-control" id="userId" placeholder='Enter your user Id' name="userId"/>
  </div>

  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" className="form-control" id="title" placeholder='How are you feeling today..' name="title"/>
  </div>

  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text"  rows="4" className="form-control" id="body" placeholder='Tell us more about it' name="body"/>
  </div>

  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Number od Reactions</label>
    <input type="text" className="form-control" id="reactions" placeholder='How many people reacted in this post' name="reactions"/>
  </div>

  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Tags</label>
    <input type="text" className="form-control" id="tags" placeholder='Please enter tags using space' name="tags"/>
  </div>
 
 
  <button type="submit" className="btn btn-primary" >Post</button>
</Form>
  )
}


export const createPostAction = async (data)=>{
 const formData = await data.request.formData();
 const postData = Object.fromEntries(formData)
 postData.tags = postData.tags.split(" ");
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)})
    .then(res => res.json())
    .then(post => {
      console.log(post);

      // addPost(post)
    });

  return redirect('/')
}

export default CreatePost