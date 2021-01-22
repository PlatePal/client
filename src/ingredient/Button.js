import React, { useState } from 'react';
import PropTypes from 'react';

function onClick(){
    console.log("Choose!");
}
function Button(props){
    return(
        <button onClick={onClick} className='btns'>
        {props.text}
        </button>
    );

}


export default Button;