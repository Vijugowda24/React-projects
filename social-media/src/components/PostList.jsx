import React, { useContext, useEffect, useState} from 'react'
import Post from './Post'
import { PostListContext } from '../store/post-list-store'
import WelcomeMessage from './WelcomeMessage'
import LoaderSpinner from './LoaderSpinner'
import { useLoaderData } from 'react-router-dom'

function PostList() {
 const postList = useLoaderData();
  // const {postList} = useContext(PostListContext)
console.log("postList",postList);


  return (
 <>
 {/* {fetching && <LoaderSpinner />} */}
 { postList.length === 0 && <WelcomeMessage/>}
 {
  postList.map(post => <Post post={post}></Post> )
 }
  
 </>
  )
}

export const PostLoader = ()=>{
  return fetch('https://dummyjson.com/posts')
  .then(res => res.json())
  .then((data)=>{
    return data.posts
  }
  );
}

export default PostList