import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import DisplayCounter from './components/DisplayCounter'
import Container from './components/Container'
import Controls from './components/Controls'
import { useSelector } from 'react-redux'
import PrivacyMessage from './components/PrivacyMessage'

function App() {
const privacyData = useSelector(state=> state.privacy)
  return (
    <>
    <div className="px-4 py-5 my-5 text-center">
      <Container> 
   <Header/>
    <div className="col-lg-6 mx-auto">
      
      {privacyData ? <PrivacyMessage /> : <DisplayCounter /> }
    <Controls></Controls>
    </div>
    </Container>
  </div>
    </>
  )
}

export default App