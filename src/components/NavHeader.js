import React, { Component } from "react";
import { StyleSheet, StatusBar, Platform } from "react-native";
import { Header, colors } from "react-native-elements";

export default class NavHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Header
        leftComponent={{
          icon: this.props.icon,
          color: "#fff",
          onPress: this.props.onIconPress,
          underlayColor: colors.primary
        }}
        centerComponent={{ text: this.props.title, style: { color: "#fff" } }}
        outerContainerStyles={styles.header}
      />
    );
  }
}

const styles = StyleSheet.create({
  header: {
    ...(Platform.OS === "android"
      ? {
          paddingTop: 15 + StatusBar.currentHeight,
          height: 85
        }
      : { height: 85 }),
    paddingBottom: 15,
    borderBottomWidth: 0
  }
});
