
import React, { useState } from "react"
import FoodItems from "./components/FoodItems"
import ErrorMessage from "./components/ErrorMessage"
import './App.css';
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
function App() {
const[bgColor, setBgColor]= useState('red')
const [fooitems, setFoodItems] =useState([]) 

  const [textToshow, setTextToShow] = useState("Food items Entered by user")

  const handleKeyDown = (event)=> {
    if(event.key ==="Enter"){
      let newFood  = event.target.value
      console.log(newFood);
      setFoodItems( [
        ...fooitems,
        newFood
      ])
    }

    
  
  }
  return (
<>
<Container>

<h1 className="food-Heading">Healthy Food</h1>
<ErrorMessage fooitems={fooitems}/>
<FoodInput handleKeyDown={handleKeyDown}/>
<p>{textToshow}</p>
<FoodItems fooitems={fooitems} bgColor={bgColor}/>
</Container>
 {/* <Container>
  <p>Above healthy food are good htmlFor ealth</p>
 </Container> */}
</>
  )
}

export default App
