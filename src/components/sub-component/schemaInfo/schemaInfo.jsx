import React from 'react'
import { GoDotFill } from "react-icons/go";
import './schemaInfo.css';

const SchemaInfo = ({color,size,label}) => {
  return (
    <div className='Color-info-group'>
      <GoDotFill color={color} fontSize={size} />
      <label className='Color-info-label'>{label}</label>
     </div>
  )
}

export default SchemaInfo;