import React from "react";
import "./App.css";
import Typist from "react-typist";

function App() {
  return (
    <div className="App">
      <div className="hero">
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
        <hr className="solid" />
        <button>📸</button>
        <button>👨🏾‍💻</button>
      </div>
    </div>
  );
}

export default App;
