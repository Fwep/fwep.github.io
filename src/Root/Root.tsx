import { ReactElement } from "react";
import { Outlet, Link } from "react-router-dom";
import Typist from "react-typist";
import { Tree } from "@geist-ui/core";

export function Root(): ReactElement {
  return (
    <div className="hero">
      <Typist
        avgTypingDelay={65}
        className="typist"
        cursor={{
          blink: true,
          element: "|",
        }}
      >
        ~/taran_cacacho
      </Typist>
      <Tree>
        <Link to={`photos`}>
          <Tree.Folder name="photos" className="tree" />
        </Link>
        <Link to={`work`}>
          <Tree.Folder name="work" className="tree">
            <Tree.File name="meta.txt" />
            <Tree.File name="bruin_racing.txt" />
            <Tree.File name="ucla.txt" />
          </Tree.Folder>
        </Link>
      </Tree>
      <Outlet />
    </div>
  );
}
