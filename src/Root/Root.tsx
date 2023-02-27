import React, { ReactElement } from "react";
import Typist from "react-typist";

export function Root(): ReactElement {
  return (
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
  );
}
