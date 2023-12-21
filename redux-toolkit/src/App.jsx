
import './App.css'
import Container from './components/Container'
import Header from './components/Header'
import Display from './components/Display'
import Controls from './components/Controls'
import {useSelector} from 'react-redux';
import PrivacyMessage from '../../social-media/react-router/src/components/PrivacyMessage'

function App() {
const privacyData = useSelector(state=> state.privacy)
  return (
    <>
   <div className="px-4 py-5 my-5 text-center">
      <Container> 
   <Header/>
    <div className="col-lg-6 mx-auto">
      
      {privacyData ? <PrivacyMessage /> : <Display /> }
    <Controls></Controls>
    </div>
    </Container>
  </div>
    </>
  )
}

export default App
