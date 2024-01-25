import React, { useCallback, useState } from "react";
import "./sidepanel.css";
import Input from "../sub-component/input/input";
import SchemaInfo from "../sub-component/schemaInfo/schemaInfo";
import Select from "../sub-component/selectTag/select";
import AllAddedSelect from "../sub-component/allAddedSelect/allAddedSelect";
import { FaPlus } from "react-icons/fa6";

const INITIAL_DATA = [
  { id: "first_name", label: "First Name", added: false, selected: false },
  { id: "last_name", label: "Last Name", added: false, selected: false },
  { id: "gender", label: "Gender", added: false, selected: false },
  { id: "age", label: "Age", added: false, selected: false },
  { id: "account_name", label: "Account Name", added: false, selected: false },
  { id: "city", label: "City", added: false, selected: false },
  { id: "state", label: "State", added: false, selected: false },
];

const Sidepanel = ({ open, setOpen, children }) => {
  const [options, setOptions] = useState(INITIAL_DATA);

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
          <AllAddedSelect options={options} setOptions={setOptions} />

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
