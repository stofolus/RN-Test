import React, { Component } from "react";
import {
  View,
  ActivityIndicator,
  StyleSheet,
  StatusBar,
  Platform
} from "react-native";

import { getRootNavigator } from "./navigator/SwitchNavigator";

export default class Root extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      authenticated: false
    };
  }

  async componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.base}>
          <ActivityIndicator size="small" />
        </View>
      );
    }

    const RootNavigator = getRootNavigator(this.state.loggedIn);
    return <RootNavigator />;
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
