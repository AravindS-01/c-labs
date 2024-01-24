import React,{useCallback, useState} from 'react'
import './sidepanel.css';
import Input from '../sub-component/input/input';
import SchemaInfo from '../sub-component/schemaInfo/schemaInfo';
import Select from '../sub-component/selectTag/select'
// import { GoPlus } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";



const INITIAL_DATA ={
  'first_name':false,
  "last_name":false,
  "gender":false,
  "age":false,
  "account_name" :false,
  "city":false,
  "state":false,
};

const options = [
  { id:'first_name',label: 'First Name', value: "" },
  { id: 'last_name',label: 'Last Name', value: "" },
  { id: 'gender',label: 'Gender', value: "" },
  { id:'age',label: 'Age', value: "" },
  { id:'account_name',label: 'Account Name', value: "", },
  { id:'city',label: 'City', value: "" },
  { id:'state',label: 'State', value: "" },
];

const Sidepanel = ({ open, setOpen, children }) => {
  const [checked,setChecked] = useState(INITIAL_DATA);
  const [selectedSchemas, setSelectedSchemas] = useState([]);
  
  const handleClick = useCallback(()=>{
  const filterData = Object.keys(checked).filter((data)=>!!checked[data]);
  const checkedData = options.filter((data)=> {return filterData.includes(data.id)} )
  
  const newComponent =  <Select 
     checked={checked}
      options={checkedData}
      setChecked={setChecked}
      label={''}// need to add label i.e.,First Name
      key={selectedSchemas.length}
      />

      setSelectedSchemas((preComp) => {
        return [...preComp,newComponent]
      })
  },[checked, selectedSchemas.length])

  return (
    <>
      <dialog className='sidePanel-dailog'>
        {children}
        <section className='Inner-content'>
        <Input 
        label={'Enter the Name of the Segment'} 
        placeholder={'Name of the Segment'}
        />
        <p className='Segment-info'>
          {'To save your segment, you need to add your schemas to build the query'}
        </p>
        <div className='Color-info-container'>
         <SchemaInfo 
          color={'red'} 
          label={'- User Traits'} 
          size={'24px'}
         />
        <SchemaInfo 
          color={'green'} 
          label={'- Group Traits'} 
          size={'24px'}
        />
          </div>
          {selectedSchemas.map((component,index) =>{
            return(
              <div key={index}>{component}</div>
            )
          })}
        <Select 
        checked={checked}
          options={options}
          // selectedSchemas={selectedSchemas}
          setChecked={setChecked}
          label={'Add Schema to Segment'}
          />
          <div className='link-button' onClick={handleClick} >
          {/* <GoPlus /> */}
          <FaPlus 
          color={'rgb(69, 242, 216)'}
          size={'13px'}
          />
          <span className='link-text'>Add new Schema</span>
          
          </div>
          
        </section>
      </dialog>

    </>
  )
}

export default Sidepanel;