import { createSwitchNavigator } from "react-navigation";

import UnauthenticatedNavigator from "./Unauthenticated";
import AuthenticatedNavigator from "./Authenticated";

export const getRootNavigator = (authenticated = false) =>
  createSwitchNavigator(
    {
      Authenticated: {
        screen: AuthenticatedNavigator
      },
      Unauthenticated: {
        screen: UnauthenticatedNavigator
      }
    },
    {
      initialRouteName: authenticated ? "Authenticated" : "Unauthenticated"
    }
  );
