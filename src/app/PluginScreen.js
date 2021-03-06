import React from "react";
import plugins from "../plugins";
import { Page } from "rsi-react-web-components";

import KioskMasterTemplate from "../templates/KioskMasterTemplate";
import lguLogo from "../assets/images/zamboanga.png";

const PluginScreen = (props) => {
  const pluginName = props.location.state.pluginName;
  const plugin = plugins.find((plugin) => plugin.name === pluginName);
  const Component = plugin.Component;
  
  return (
    <KioskMasterTemplate logo={lguLogo} partner={{ name: "Zamboanga City" }}>
        <Component {...props} />
    </KioskMasterTemplate>
  );
};

export default PluginScreen;
