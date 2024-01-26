import React, { useCallback, useState } from "react";
import "./sidepanel.css";
import Input from "../sub-component/input/input";
import SchemaInfo from "../sub-component/schemaInfo/schemaInfo";
import Select from "../sub-component/selectTag/select";
import AllAddedSchema from "../sub-component/allAddedSchema/allAddedSchema";
import { FaPlus } from "react-icons/fa6";

const Sidepanel = ({ open, setOpen, children, options, setOptions }) => {
  const handleClick = useCallback(() => {
    setOptions((pre) =>
      pre.map((option) => {
        return { ...option, added: option.selected };
      })
    );
  }, []);

  return (
    <>
      <dialog className='sidePanel-dailog'>
        {children}
        <section className='Inner-content'>
          <Input
            label={"Enter the Name of the Segment"}
            placeholder={"Name of the Segment"}
          />
          <p className='Segment-info'>
            {
              "To save your segment, you need to add your schemas to build the query"
            }
          </p>
          <div className='Color-info-container'>
            <SchemaInfo color={"red"} label={"- User Traits"} size={"24px"} />
            <SchemaInfo
              color={"green"}
              label={"- Group Traits"}
              size={"24px"}
            />
          </div>
          <AllAddedSchema options={options} setOptions={setOptions} />

          <Select
            options={options}
            label={"Add Schema to Segment"}
            setOptions={setOptions}
          />
          <div className='link-button' onClick={handleClick}>
            <FaPlus color={"rgb(69, 242, 216)"} size={"13px"} />
            <span className='link-text'>Add new Schema</span>
          </div>
        </section>
      </dialog>
    </>
  );
};

export default Sidepanel;
