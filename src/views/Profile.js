import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import NavHeader from "../components/NavHeader";

export default class Profile extends Component {
  render() {
    return (
      <View style={styles.main}>
        <NavHeader
          navigation={this.props.navigation}
          title="Profile"
          icon="menu"
          onIconPress={() => this.props.navigation.toggleDrawer()}
        />
        <View style={styles.base}>
          <Text>Profile</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1
  },
  base: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
