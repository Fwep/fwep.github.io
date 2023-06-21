import { Card } from "@geist-ui/core";
import { ReactElement, PropsWithChildren } from "react";

type Props = {};

export function JobEntry(props: PropsWithChildren<Props>): ReactElement {
  return (
    <>
      <Card hoverable type="secondary" className="job-entry">
        {props?.children}
      </Card>
    </>
  );
}
