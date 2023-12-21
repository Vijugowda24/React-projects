
import { useState } from 'react';
import styles from './App.module.css';
import Buttons from './components/Buttons';
import Display from './components/Display';

function App() {
  const [calVal, setCalVal] = useState("")

  const onButtonClick = (btnClick)=>{
    if(btnClick === 'C'){
setCalVal("")
    } else if(btnClick === '='){

      const res = eval(calVal)
setCalVal(res)
    }else{
      const newDisplayValue = calVal + btnClick
      setCalVal(newDisplayValue)
    }
  }
  return (
<>
<div className={styles.calculator}>
<Display displayValue={calVal}/>
  <Buttons onBtnClick={onButtonClick}/>
</div>
</>
  )
}

export default App
