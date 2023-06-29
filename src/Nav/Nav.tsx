import { Button, Spacer } from "@geist-ui/core";
import { ReactElement, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import TypeIt from "typeit-react";

export function Nav(): ReactElement {
  const root = "~/taran_cacacho";
  const { pathname } = useLocation();
  const [isTypingRoot, setIsTypingRoot] = useState(true);
  const [subDir, setSubDir] = useState(pathname);

  return (
    <div className={`nav${pathname !== "/" ? " animate-top" : ""}`}>
      <div className="terminal-input">
        <TypeIt
          options={{
            cursor: false,
            afterComplete: () => setIsTypingRoot(false),
            speed: 5,
          }}
        >
          {root}
        </TypeIt>
        {!isTypingRoot && pathname === "/photos" && (
          <TypeIt options={{ speed: 1 }}>/photos</TypeIt>
        )}{" "}
        {!isTypingRoot && pathname === "/work" && (
          <TypeIt options={{ speed: 3 }}>/work</TypeIt>
        )}
      </div>
      <Spacer h={0.5} />
      <div className="nav-links">
        <Link
          to={`photos`}
          onClick={() => {
            setSubDir("/photos");
            setIsTypingRoot(false);
          }}
          title="Go to photos"
        >
          <Button className="nav-button" type="secondary">
            {subDir === "/photos" ? "📸" : "📷"}
          </Button>
        </Link>
        <Link
          to={`work`}
          onClick={() => {
            setSubDir("/work");
            setIsTypingRoot(false);
          }}
          title="Go to work"
        >
          <Button type="secondary" className="nav-button">
            👨🏾‍💻
          </Button>
        </Link>
      </div>
    </div>
  );
}
