import { ReactElement } from "react";
import { JobEntry } from "../JobEntry";
import Typist from "react-typist";

export function WorkPanel(): ReactElement {
  return (
    <div className="work-panel">
      <JobEntry>
        <img
          alt="Meta logo"
          className="company-logo"
          height={30}
          src={"/assets/images/meta_logo.png"}
          width={50}
        />
        <div className="typist-container">
          <Typist avgTypingDelay={0} className="typist-job-description">
            <p>less meta.txt</p>
          </Typist>
          <p className="raw-job-text">
            As part of the Formula SAE racing org, I was in charge of the design
            of our race car's cooling system. I used MATLAB and Simulink to
            model the performance of various configurations, and sourced and
            manufactured the mounting fixtures.
          </p>
        </div>
      </JobEntry>
      <JobEntry>
        <img
          alt="Bruin Racing logo"
          className="company-logo"
          height={200}
          src={"/assets/images/bruin_racing_logo.png"}
          width={200}
        />
        <p className="job-description">
          As part of the Formula SAE racing org, I was in charge of the design
          of our race car's cooling system. I used MATLAB and Simulink to model
          the performance of various configurations, and sourced and
          manufactured the mounting fixtures.
        </p>
      </JobEntry>
      <JobEntry>
        <img
          alt="UCLA logo"
          className="company-logo"
          height={40}
          src={"/assets/images/ucla_logo.png"}
          width={50}
        />
        <p className="job-description">
          As part of the Formula SAE racing org, I was in charge of the design
          of our race car's cooling system. I used MATLAB and Simulink to model
          the performance of various configurations, and sourced and
          manufactured the mounting fixtures.
        </p>
      </JobEntry>
    </div>
  );
}
