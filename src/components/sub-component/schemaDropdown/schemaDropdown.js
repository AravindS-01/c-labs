import React, { useState, useCallback } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { CgRemoveR } from "react-icons/cg";
import { GoDotFill } from "react-icons/go";

const SchemaDropdown = ({ options, setOptions, label }) => {
  const [toggleOptions, setToggleOptions] = useState(false);

  const handleChange = useCallback(() => {
    setToggleOptions((pre) => !pre);
  }, []);

  const removeOptions = useCallback(
    (label) => {
      setOptions((pre) =>
        pre?.map((option) => {
          if (option.label === label) {
            return { ...option, added: !option.added, selected: !option.added };
          }
          return option;
        })
      );
    },
    [setOptions]
  );
  const handleChecked = useCallback((e) => {
    setOptions((pre) =>
      pre?.map((option) => {
        if (option.id + "option" === e.target.id || option.label === label) {
          return { ...option, added: !option.added, selected: !option.added };
        }
        return option;
      })
    );
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
        <CgRemoveR
          color={"lightblue"}
          size={"3rem"}
          className='remove-icon'
          onClick={() => removeOptions(label)}
        />
      </section>
      <div className={toggleOptions ? "option-show" : "none"}>
        {options.reduce((ini, schema) => {
          if (schema.added === false) {
            ini.push(
              <div className='select-option' key={schema.id + "option"}>
                <div id={schema.id + "option"} onClick={handleChecked}>
                  {schema.label}
                </div>
              </div>
            );
          }
          return ini;
        }, [])}
      </div>
    </>
  );
};

export default SchemaDropdown;
