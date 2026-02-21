import { useState } from "react"
import './style.css'
function ColorPicker(){
    const [color,setColor] =useState('#FFFFFF');
    const colorChangeHandler = (e)=>{
            setColor(e.target.value)
    }
    return(
    <div className="color-picker-container">
            <h1>Color Picker App</h1>
        <div className="color-container" style={{backgroundColor:color}}>
            <p>Selected Colour: {color}</p>
        </div>   
            <div className="choose-color-container">
                <p>Choose Color:</p>
                <input type="color" name="color" value={color} onChange={colorChangeHandler} />
            </div>
    </div>
        )
}
export default ColorPicker