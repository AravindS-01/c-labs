import SchemaDropdown from "../schemaDropdown/schemaDropdown";

const AllAddedSchema = ({ options, setOptions }) => {
  return (
    <>
      {options.reduce((components, data, index) => {
        data.added &&
          components.push(
            <SchemaDropdown
              options={options}
              setOptions={setOptions}
              label={data.label}
              key={"schema" + (index + 1)}
            />
          );
        return components;
      }, [])}
    </>
  );
};

export default AllAddedSchema;
