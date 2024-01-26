import React from 'react'
import './header.css';
import { SlArrowLeft } from "react-icons/sl";


const Header = ({title,rightOperator}) => {
  return (
    <>
   
    <header className='Header-cmp'>
    <div className={rightOperator?'Header-label' : 'none'}><SlArrowLeft  size='15px' fontWeight={700}/>
</div>
    {title}</header>
    </>
  )
}

export default Header;