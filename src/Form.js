import React from 'react'
import colornames from 'colornames';


const Form = ({colorValue,setColorValue,setHexValue,isDarkText,setIsDarkValue}) => {
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
        <label >Add Color Name :</label>
        <input type="text" 
                placeholder='enter a color'
                autoFocus
                required
                value={colorValue}
                onChange={(e)=>{
                    setColorValue(e.target.value);
                    setHexValue(colornames(e.target.value))
                }}
      />
        <button
            type="button"
            onClick={()=>setIsDarkValue(! isDarkText)}
        
        >Toggle Text </button>        

    </form>
  )
}

export default Form