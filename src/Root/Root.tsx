import { Nav } from "../Nav";
import { ReactElement } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Link, Modal, Spacer, useModal } from "@geist-ui/core";
import TypeIt from "typeit-react";

export function Root(): ReactElement {
  const { visible, setVisible } = useModal();
  const { pathname } = useLocation();
  return (
    <div className="page">
      <Nav />
      <Spacer h={0.5} />
      <main className="main">
        <Outlet />
      </main>
      <Spacer h={0.5} />
      <Link
        className={`${pathname === "/" ? "hide-contact" : ""}`}
        onClick={(e) => {
          e.preventDefault();
          setVisible(true);
        }}
      >
        Contact
      </Link>
      <Spacer h={0.5} />
      <Modal
        onClose={() => setVisible(false)}
        visible={visible}
        wrapClassName="contact-modal"
      >
        <Modal.Title className="contact-modal">Contact Information</Modal.Title>
        <Modal.Content>
          <TypeIt options={{ speed: 1 }}>cat contact.txt</TypeIt>
          <div className="contact">
            <br />
            Email:{" "}
            <Link color href="mailto:tarancacacho@gmail.com" target="_blank">
              tarancacacho@gmail.com
            </Link>
            <br />
            Resume:{" "}
            <Link
              color
              href="https://drive.google.com/file/d/14NKrPfpl3MInqTR7ttO-5ajJnkN4O87i/view?usp=sharing"
              target="_blank"
            >
              View
            </Link>
            <br />
            LinkedIn:{" "}
            <Link
              color
              href="https://linkedin.com/in/tarancacacho"
              target="_blank"
            >
              tarancacacho
            </Link>
            <br />
            Github:{" "}
            <Link color href="https://github.com/Fwep" target="_blank">
              Fwep
            </Link>
          </div>
        </Modal.Content>
      </Modal>
    </div>
  );
}
