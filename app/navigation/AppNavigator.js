import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Articles from "../screens/Articles";
import Inbox from "../screens/Inbox";
import HomeScreen from "../screens/HomeScreen";
import ShopMap from "../screens/ShopMap";
import Scanner from "../screens/Scanner";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Home"
      options={{ headerShown: false }}
      component={HomeScreen}
    ></Tab.Screen>
    <Tab.Screen
      name="Inbox"
      options={{ headerShown: false }}
      component={Inbox}
    ></Tab.Screen>
    <Tab.Screen
      name="Scanner"
      options={{ headerShown: false }}
      component={Scanner}
    ></Tab.Screen>
    <Tab.Screen
      name="ShopMap"
      options={{ headerShown: false }}
      component={ShopMap}
    ></Tab.Screen>
    <Tab.Screen
      name="Articles"
      options={{ headerShown: false }}
      component={Articles}
    ></Tab.Screen>
  </Tab.Navigator>
);

export default AppNavigator;
