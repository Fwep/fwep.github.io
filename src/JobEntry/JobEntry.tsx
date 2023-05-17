import { ReactElement, PropsWithChildren } from "react";

type Props = {};

export function JobEntry(props: PropsWithChildren<Props>): ReactElement {
  return (
    <>
      <div className="job-entry">{props?.children}</div>
    </>
  );
}
