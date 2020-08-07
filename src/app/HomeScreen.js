import React from "react";
import modules from "../modules";
import { Page } from "rsi-react-web-components";

import KioskMasterTemplate from "../templates/KioskMasterTemplate";
import lguLogo from "../assets/images/zamboanga.png";

const Module = ({ module, onSelect }) => {
  return (
    <div style={styles.module}>
      <img style={{width: 100}} src={module.logo} onClick={() => onSelect(module)} />
      <label>{module.title}</label>
    </div>
  );
};

const HomeScreen = (props) => {
  const onSelectModule = (module) => {
    props.history.push("/module", {moduleName: module.name});
  };

  return (
    <KioskMasterTemplate logo={lguLogo} partner={{ name: "Zamboanga City" }}>
      <Page>
        {modules.map((module) => (
          <Module
            key={module.name}
            {...props}
            module={module}
            onSelect={onSelectModule}
          />
        ))}
      </Page>
    </KioskMasterTemplate>
  );
};

const styles = {
  module: {
    display: "flex",
    flexDirection: "column",
    width: 150,
    justifyContent: "center",
    alignItems: "center",
  },
};

export default HomeScreen;
