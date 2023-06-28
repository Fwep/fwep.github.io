import { Card } from "@geist-ui/core";
import { ReactElement, PropsWithChildren } from "react";

type Props = { id: string };

export function JobEntry({
  id,
  children,
}: PropsWithChildren<Props>): ReactElement {
  return (
    <Card hoverable type="secondary" className="job-entry" id={id} width={50}>
      {children}
    </Card>
  );
}
