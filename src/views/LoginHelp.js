import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import NavHeader from "../components/NavHeader";

export default class LoginHelp extends Component {
  render() {
    return (
      <View style={styles.main}>
        <NavHeader
          navigation={this.props.navigation}
          title="Dashboard"
          icon="arrow-back"
          onIconPress={() => this.props.navigation.goBack(null)}
        />
        <View style={styles.base}>
          <Text style={{ fontSize: 24, paddingBottom: 10 }}>Om inloggning</Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            ultricies dui in mollis mattis. Nullam faucibus justo rhoncus,
            maximus eros sed, laoreet tellus. Sed leo ipsum, efficitur eu erat
            sed, varius tincidunt massa. Pellentesque vel hendrerit sem, at
            aliquet massa. Mauris ut congue ligula. Aenean fringilla dolor ut
            sem ultricies, sit amet semper turpis egestas. Donec vehicula
            molestie dui vel ullamcorper. Morbi suscipit sem tortor, vel cursus
            leo tincidunt nec. Aenean eget euismod mauris. Class aptent taciti
            sociosqu ad litora torquent per conubia nostra, per inceptos
            himenaeos. Etiam eget eleifend magna, at sagittis sem. Suspendisse
            potenti. Proin tempus rhoncus mollis. Mauris luctus lorem eu gravida
            gravida. In varius aliquam dapibus.
          </Text>
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
    padding: 24
  }
});
