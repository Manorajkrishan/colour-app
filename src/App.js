import Form from "./Form";
import Squre from "./Squre";
import {useState} from 'react'



function App() {

  const [colorValue,setColorValue]= useState('')
  const [hexValue,setHexValue]= useState('')
  const [isDarkText,setIsDarkValue]= useState(true)
  return (
    <div className="App">
    <Squre
      colorValue={colorValue}
      hexValue={hexValue}
      isDarkText={isDarkText}
      
    />
    <Form 
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkValue={setIsDarkValue}
    
    />
    </div>
  );
}

export default App;
