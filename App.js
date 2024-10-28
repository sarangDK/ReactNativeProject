import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentScreen";
import { Component } from "react";

// create navigation stack
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
  },
  {
    initialRouteName: "Components",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);