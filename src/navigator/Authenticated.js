import { createDrawerNavigator } from "react-navigation";

import Dashboard from "../views/Dashboard";
import Profile from "../views/Profile";

const LoggedInNavigator = createDrawerNavigator({
  Dashboard: {
    screen: Dashboard
  },
  Profile: {
    screen: Profile
  }
});

export default LoggedInNavigator;
