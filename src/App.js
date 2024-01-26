import "./App.css";
import Sidepanel from "./components/sidePanel/sidepanel";
import Header from "./components/header/header";
import React, { useState } from "react";

const INITIAL_DATA = [
  { id: "first_name", label: "First Name", added: false, selected: false },
  { id: "last_name", label: "Last Name", added: false, selected: false },
  { id: "gender", label: "Gender", added: false, selected: false },
  { id: "age", label: "Age", added: false, selected: false },
  { id: "account_name", label: "Account Name", added: false, selected: false },
  { id: "city", label: "City", added: false, selected: false },
  { id: "state", label: "State", added: false, selected: false },
];

function App() {
  const [options, setOptions] = useState(INITIAL_DATA);

  const saveSegment = () => {
    //const url = "https://webhook.site/#!/94027e53-b7bf-44de-ac88-130473b90663";

    const segment_name = document.getElementById("segment-input").value;
    if (!segment_name) {
      document.getElementById("segmentNameError").style.display = "inline";
      return;
    }

    const schema = options.reduce((acc, value) => {
      value.added && acc.push({ [value.id]: value.label });
      return acc;
    }, []);

    if (!schema.length) {
      document.getElementById("saveSegmentError").style.display = "block";
      return;
    }
    document.getElementById("saveSegmentError").style.display = "none";
    const data = { segment_name, schema };
    console.log({ data });
    // fetch(url, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("Success:", data);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  return (
    <div className='App'>
      <Header title={"customer Labs"} />
      <main>
        <button className='Save-segment-btn' onClick={saveSegment}>
          Save segment
        </button>
        <span className='error-message' id='saveSegmentError'>
          Please select at least one schema.
        </span>
        <Sidepanel
          children={<Header title={"Saving Segment"} rightOperator={true} />}
          options={options}
          setOptions={setOptions}
        />
      </main>
    </div>
  );
}

export default App;
