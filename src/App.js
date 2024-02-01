import React, { useState } from "react";
import Main from "./Main";
import Form2 from "./Form2";

function App() {
  const [showForm2, setShowForm2] = useState(false);

  const handleNextButtonClick = () => {
    setShowForm2(true);
  };

  return (
    <div>
      {showForm2 ? (
        <Form2 />
      ) : (
        <Main onNextButtonClick={handleNextButtonClick} />
      )}
    </div>
  );
}

export default App;
