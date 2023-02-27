import React from "react";
import "./App.css";
import Typist from "react-typist";

function App() {
  return (
    <div className="App">
      <Typist
        avgTypingDelay={65}
        className="typist"
        cursor={{
          blink: true,
          element: "█",
        }}
      >
        taran cacacho
      </Typist>
    </div>
  );
}

export default App;
