import { createStackNavigator } from "react-navigation";

import Login from "../views/Login";
import ModalsNavigator from "./Modals";

const LoggedOutNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Modals: {
      screen: ModalsNavigator
    }
  },
  {
    headerMode: "none",
    mode: "modal"
  }
);

export default LoggedOutNavigator;
