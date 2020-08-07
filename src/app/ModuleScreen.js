import React from "react";
import modules from "../modules";
import { Page } from "rsi-react-web-components";

import KioskMasterTemplate from "../templates/KioskMasterTemplate";
import lguLogo from "../assets/images/zamboanga.png";

const ModuleScreen = (props) => {
  const moduleName = props.location.state.moduleName;
  const module = modules.find((mod) => mod.name === moduleName);
  const Component = module.Component;
  return (
    <KioskMasterTemplate logo={lguLogo} partner={{ name: "Zamboanga City" }}>
      <Page>
        <Component {...props} />
      </Page>
    </KioskMasterTemplate>
  );
};

export default ModuleScreen;
