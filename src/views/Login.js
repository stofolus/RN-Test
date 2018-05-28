import React, { Component } from "react";
import { StyleSheet, View, Text, ImageBackground } from "react-native";
import { Input, Button, colors } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { pnr: "", validPnr: true };
    this.onLogin = this.onLogin.bind(this);
    this.showHelp = this.showHelp.bind(this);
    this.onPnrChanged = this.onPnrChanged.bind(this);
  }

  onLogin() {
    if (this.state.pnr.replace("-", "").length < 12) {
      this.setState({ validPnr: false });
      return;
    }
    this.props.navigation.navigate("Dashboard");
  }

  onPnrChanged(pnr) {
    if (pnr) {
      this.setState({ pnr });
    }
  }

  showHelp() {
    this.props.navigation.navigate("LoginHelp");
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/cool-background.png")}
        style={styles.base}
      >
        <View>
          <Text
            style={{
              textAlign: "center",
              fontSize: 30,
              color: "#fff",
              marginTop: -170
            }}
          >
            MyCompany Inc.
          </Text>
        </View>
        <View style={styles.panel}>
          <Text style={{ fontSize: 22, textAlign: "center" }}>
            Logga in med Bank-id
          </Text>
          <View style={{ marginTop: 15 }}>
            {this.state.validPnr ? (
              <Input
                placeholder="19121212-1212"
                containerStyle={{ width: "100%" }}
                onChangeText={text => this.onPnrChanged(text)}
                value={this.state.pnr}
              />
            ) : (
              <Input
                placeholder="19121212-1212"
                containerStyle={{ width: "100%" }}
                onChangeText={text => {
                  this.onPnrChanged(text);
                }}
                value={this.state.pnr}
                errorMessage="Felaktigt personnummer"
              />
            )}
          </View>
          <View style={{ marginTop: 15 }}>
            <Button
              title="Login"
              onPress={this.onLogin}
              buttonStyle={{ borderRadius: 8 }}
            />
          </View>
        </View>
        <View>
          <Button
            title="Jag behöver hjälp"
            clear={true}
            titleStyle={{ color: "#fff" }}
            onPress={() => this.showHelp()}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    justifyContent: "center"
  },
  panel: {
    backgroundColor: "#FAFAFA",
    margin: 15,
    padding: 15,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 15,
    elevation: 1,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0,
    shadowRadius: 8
  }
});
