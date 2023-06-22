import { Nav } from "../Nav";
import { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Page, Spacer } from "@geist-ui/core";

export function Root(): ReactElement {
  return (
    <Page>
      <Page.Header className="header">
        <Nav />
      </Page.Header>
      <Spacer h={2} />
      <Outlet />
    </Page>
  );
}
