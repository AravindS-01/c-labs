import Newselect from "../newSelect/newSelect";

const AllAddedSelect = ({ options, setOptions, setSelectedSchemas }) => {
  return (
    <>
      {options.reduce((components, data, index) => {
        data.added &&
          components.push(
            <Newselect
              options={options}
              setOptions={setOptions}
              label={data.label}
              key={"option" + index}
            />
          );
        return components;
      }, [])}
    </>
  );
};

export default AllAddedSelect;
