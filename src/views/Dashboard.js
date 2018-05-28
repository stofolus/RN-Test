import React, { Component } from "react";
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";
import { List, ListItem } from "react-native-elements";
import NavHeader from "../components/NavHeader";

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.list = [
      {
        title: "Appointments",
        icon: "av-timer"
      },
      {
        title: "Trips",
        icon: "flight-takeoff"
      }
    ];
  }

  render() {
    return (
      <View style={styles.main}>
        <NavHeader
          navigation={this.props.navigation}
          title="Dashboard"
          icon="menu"
          onIconPress={() => this.props.navigation.toggleDrawer()}
        />
        <View>
          <View style={{ marginTop: 15 }}>
            {this.list.map((item, i) => (
              <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon }}
                onPress={() => console.log("Pressed")}
                chevron={true}
                bottomDivider={true}
                topDivider={i === 0}
              />
            ))}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#F1F1F1"
  }
});
