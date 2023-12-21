import { useState } from 'react'
import './App.css'
import PostListProvider from '../store/post-list-store'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import { Outlet } from 'react-router-dom';

function App() {
  const[selectedTab, setSelectedTab] = useState("Home")
  


  return (
    <PostListProvider>
    <div className='app-conatiner'>
<Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab}></Sidebar>
<div className='content'>
<Header/>
<Outlet></Outlet>
<Footer/>
</div>
    </div>
    </PostListProvider>
  )
}

export default App
