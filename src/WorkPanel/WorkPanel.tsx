import { ReactElement } from "react";
import { JobEntry } from "../JobEntry";
import Typist from "react-typist";
import { Image, Spacer, Text } from "@geist-ui/core";

export function WorkPanel(): ReactElement {
  return (
    <div className="work-panel">
      <JobEntry id="entry-1">
        <Image
          alt="Meta logo"
          className="company-logo"
          height="30px"
          id="logo-1"
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
          <Text className="raw-job-text" id="job-text-1">
            As part of the Formula SAE racing org, I was in charge of the design
            of our race car's cooling system. I used MATLAB and Simulink to
            model the performance of various configurations, and sourced and
            manufactured the mounting fixtures.
          </Text>
        </div>
      </JobEntry>
      <Spacer h={0.5} />
      <JobEntry id="entry-2">
        <Image
          alt="Bruin Racing logo"
          className="company-logo"
          height="30px"
          id="logo-2"
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
          <p className="raw-job-text" id="job-text-2">
            As part of the Formula SAE racing org, I was in charge of the design
            of our race car's cooling system. I used MATLAB and Simulink to
            model the performance of various configurations, and sourced and
            manufactured the mounting fixtures.
          </p>
        </div>
      </JobEntry>
      <Spacer h={0.5} />
      <JobEntry id="entry-3">
        <Image
          alt="UCLA logo"
          className="company-logo"
          height="30px"
          id="logo-3"
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
          <p className="raw-job-text" id="job-text-3">
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
