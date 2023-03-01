import { ReactElement } from "react";
import { Outlet, Link } from "react-router-dom";
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
        ~/taran_cacacho
      </Typist>
      <hr className="solid" />
      <Link to={`photos`}>📸</Link>
      <Link to={`work`}>👨🏾‍💻</Link>
      <Outlet />
    </div>
  );
}
