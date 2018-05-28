import { createStackNavigator } from "react-navigation";

import LoginHelp from "../views/LoginHelp";

const ModalNavigator = createStackNavigator(
  {
    LoginHelp: {
      screen: LoginHelp
    }
  },
  {
    headerMode: "none",
    mode: "modal"
  }
);

export default ModalNavigator;
