import React, { useState,useCallback } from 'react'
import './select.css'
import { IoIosArrowDown  } from "react-icons/io";
import { CgRemoveR } from "react-icons/cg";
import { GoDotFill } from "react-icons/go";




const Select = ({options,checked,setChecked,label}) => {
    const [toggleOptions,setToggleOptions] = useState(true);
    
  const handleChange = useCallback((e)=>{
    setToggleOptions(!toggleOptions);
  },[toggleOptions])
    
   const handleChecked = useCallback((e)=>{
      setChecked((pre)=>{
        return{...pre,[e.target.id]:e.target.checked}
      })
   },[]);

    return (
        <>
        <section className='dropdown-element'>
        <GoDotFill color={'gray'} fontSize={'24px'} />
        <div className='select-element'>
            <input 
            type='button' 
            value={label}
            onClick={handleChange} 
            className='select-tag'
            />
            <div className="custom-arrow">
                <IoIosArrowDown  fontSize={'20px'}/>
            </div>
        </div>
        <CgRemoveR color={'lightblue'} size={'3rem'} className='remove-icon'/>
            </section>
        <div className={toggleOptions ?'option-show' :'none'}>
            {
                options.map((schema) =>{
                    return(
                        <div className='select-option' key={schema.id} >
                        <input type='checkbox' value={schema.label} id={schema.id} checked={checked[schema.id]} onChange={handleChecked}/>
                        <label style={{cursor:'pointer'}}> {schema.label}  
                        </label>
                      </div>
                    )
                })
               }
               </div>
               </>
    )
}

export default Select