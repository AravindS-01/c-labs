import React from 'react'
import './input.css';

const Input = ({label,placeholder}) => {
    return (
        <div className='input-element'>
         <label className='input-label'>{label}</label>
         <input placeholder={placeholder} className='input-tag' />
        </div>
    )
}

export default Input;