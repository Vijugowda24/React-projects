import { useState } from "react";
import { useEffect } from "react";
import { createContext, useReducer } from "react";


export const PostListContext= createContext({
  postList:[],
  addPost:()=>{},
  deletePost:()=>{},
}
);

const postListReducer = (currentPostList, action)=>{
  console.log(action);
  console.log(currentPostList);
  let newPostList = currentPostList
if(action.type === 'DELETE_POST'){
newPostList = newPostList.filter(post=> post.id !== action.payload.postId)
} else if (action.type === 'ADD_POST'){
  console.log(action.payload);
  newPostList = [ action.payload, ...currentPostList]
} else if(action.type === 'ADD_INITIAL_POSTS'){
  newPostList = action.payload.posts
}
  return newPostList;
}

const PostListProvider = ({children})=>{
 
  const[postList, dispatchPostList]= useReducer(postListReducer, [])
  // const[fetching, setFetching] = useState(false)


  const addPost =(post)=>{
    console.log("add posy", post);
    dispatchPostList({
      type:'ADD_POST',
      payload:post
    })
      }

  const addInitialPost =(posts)=>{
    dispatchPostList({
      type:'ADD_INITIAL_POSTS',
      payload:{
      posts
      }
    })
      }
    
      const deletePost = (postId)=>{
    dispatchPostList({
      type:'DELETE_POST',
      payload:{
        postId
      }
    })
    
      }

      // useEffect(()=>{
      //   const controller = new AbortController();
      //   const signal = controller.signal;
      //   setFetching(true)
      
      //   // return ()=>{
      //   //   console.log("clean up");
      //   //   controller.abort()
      //   // }
          
      // },[])

  return(
<PostListContext.Provider value={{
  postList:postList,
addPost:addPost,
deletePost: deletePost,
}}>
  {children}
</PostListContext.Provider>
  )
}
// const DEFAULT_POST_LIST = [
//   {
//   id:'1',
//   title:'Going to Mumbai',
//   body:'Hi friends, I am going to Mumbai for my vacations Hope to enjoy a lot. Peace.out',
//   reactions: 1,
//   userId:'user-g',
//   tags: ["vacation", "Mumbai", "Enjoying"]
// },
//   {
//   id:'2',
//   title:'Pass to bhai',
//   body:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime architecto omnis autem inventore alias aut facilis fuga, tenetur ab enim temporibus nisi expedita esse facere vitae nihil soluta commodi magni. Nemo, aut sint',
//   reactions: 45,
//   userId:'user-12',
//   tags: ["Graduatin", "Unbelieveable"]
// },
// ]
export default PostListProvider;