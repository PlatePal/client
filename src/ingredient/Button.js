import React, { useState } from 'react';



function Button(props){
    const[clicked, setClicked] = useState(false);
    var color = (clicked ?   '#f5bb47' :'#E5E5E5');
    var btnStyle = {
        background: color
    };
    return(
        <button onClick={()=> {clicked ? setClicked(false) : setClicked(true)}} className='btns' style={btnStyle} >
        {props.text}
        </button>
    );
}
export default Button;