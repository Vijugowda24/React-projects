import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './root/App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CreatePost, { createPostAction } from './components/CreatePost.jsx';
import PostList, { PostLoader } from './components/PostList.jsx';
const route = createBrowserRouter([
  {
path:'/', element:<App />, children:[
  {
    path:'/', element:<PostList/>, loader: PostLoader
  },{
    path:"create-post", element: <CreatePost />, action: createPostAction
  }
]

  },
 

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}>
      '
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
