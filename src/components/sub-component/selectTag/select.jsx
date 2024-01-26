import React, { useState, useCallback } from "react";
import "./select.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { CgRemoveR } from "react-icons/cg";
import { GoDotFill } from "react-icons/go";

const Select = ({ options, label, setOptions }) => {
  const [toggleOptions, setToggleOptions] = useState(false);
  const handleChange = useCallback(
    (e) => {
      setToggleOptions(!toggleOptions);
    },
    [toggleOptions]
  );

  const handleChecked = useCallback((e) => {
    setOptions((pre) => {
      return pre.map((option) => {
        if (option.id === e.target.id) {
          return { ...option, selected: !option.selected };
        }
        return option;
      });
    });
  }, []);

  return (
    <>
      <section className='dropdown-element'>
        <GoDotFill color={"gray"} fontSize={"24px"} />
        <div className='select-element'>
          <input
            type='button'
            value={label}
            onClick={handleChange}
            className='select-tag'
          />
          <div className='custom-arrow'>
            {toggleOptions ? (
              <IoIosArrowUp fontSize={"20px"} />
            ) : (
              <IoIosArrowDown fontSize={"20px"} />
            )}
          </div>
        </div>
        <CgRemoveR color={"lightblue"} size={"3rem"} className='remove-icon' />
      </section>
      <div className={toggleOptions ? "option-show" : "none"}>
        {options.reduce((acc, schema) => {
          !schema.added &&
            acc.push(
              <div className='select-option' key={schema.id + "dropdown"}>
                <input
                  type='checkbox'
                  value={schema.label}
                  id={schema.id}
                  checked={schema.selected}
                  onChange={handleChecked}
                />
                <label style={{ cursor: "pointer" }}> {schema.label}</label>
              </div>
            );
          return acc;
        }, [])}
      </div>
    </>
  );
};

export default Select;
