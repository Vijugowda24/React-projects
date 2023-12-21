import React, { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { PostListContext } from '../store/post-list-store';

function Post({post}) {
  const  {deletePost} = useContext(PostListContext)
  return (
    <div class="card post-card" style={{width: "18rem"}}>
  <div class="card-body">
    <h5 class="card-title">{post.title}
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=> deletePost(post.id)}>
    <MdDelete />

  </span>
    </h5>
    <p class="card-text">{post.body}</p>
    {
      post.tags.map((tag, i)=> <span key={i} class="badge text-bg-primary mx-2">{tag}</span>)
    }

<div class="alert alert-success reactions" role="alert">
  this post has been reacted by {post.reactions} people
</div>

  </div>
</div>
  )
}

export default Post