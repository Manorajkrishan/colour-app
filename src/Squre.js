import React from 'react'

const Squre = ({colorValue,hexValue,isDarkText}) => {
  return (
    <section className="square"
             style={{
                 backgroundColor:colorValue,
                 color:isDarkText ? "#000":"#FFF"
             }}>
                <p>{colorValue?colorValue:"Empty Value"}</p>
                <p>{hexValue?hexValue:null}</p>

    </section>
  )
}
Squre.defaultProps={
    colorValue:"Empty color value"
}

export default Squre