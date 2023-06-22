import { ReactElement } from "react";
import { JobEntry } from "../JobEntry";
import Typist from "react-typist";
import { Image } from "@geist-ui/core";

export function WorkPanel(): ReactElement {
  return (
    <div className="work-panel">
      <JobEntry>
        <Image
          alt="Meta logo"
          className="company-logo"
          height="30px"
          src={"/assets/images/meta_logo.png"}
          width="50px"
        />
        <div className="typist-container">
          <Typist
            avgTypingDelay={0}
            className="typist-job-description"
            startDelay={1000}
          >
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
        <Image
          alt="Bruin Racing logo"
          className="company-logo"
          height="30px"
          src={"/assets/images/bruin_racing_logo.png"}
          width="50px"
        />
        <div className="typist-container">
          <Typist
            avgTypingDelay={0}
            className="typist-job-description"
            startDelay={2000}
          >
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
        <Image
          alt="UCLA logo"
          className="company-logo"
          height="30px"
          src={"/assets/images/ucla_logo.png"}
          width="50px"
        />
        <div className="typist-container">
          <Typist
            avgTypingDelay={0}
            className="typist-job-description"
            startDelay={3000}
          >
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
    </div>
  );
}
