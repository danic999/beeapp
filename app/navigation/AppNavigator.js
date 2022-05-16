import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, ImageBackground, Text, Image } from "react-native";

import Articles from "../screens/Articles";
import Inbox from "../screens/Inbox";
import HomeScreen from "../screens/HomeScreen";
import ShopMap from "../screens/ShopMap";
import Scanner from "../screens/Scanner";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const Tab = createBottomTabNavigator();
const AppNavigator = () => (
  <Tab.Navigator
  screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: { backgroundColor:'#0a0c0b',
                    height:80
                    },
    }}
  >
    <Tab.Screen
      name="Home"
      options={{ headerShown: false, tabBarIcon: (props) => {console.log(props); return (<Image style={styles.image1} source={require("../assets/Home.png")}/>) } }}
      component={HomeScreen}
    ></Tab.Screen>
    <Tab.Screen
      name="Inbox"
      options={{ headerShown: false, tabBarIcon: (props) => {console.log(props); return (<Image style={styles.image2} source={require("../assets/ChatBubble.png")}/>) } }}
      component={Inbox}
    ></Tab.Screen>
    <Tab.Screen
      name="Scanner"
      options={{ headerShown: false, tabBarIcon: (props) => {console.log(props); return (<Image style={styles.image3} source={require("../assets/Group1.png")}/>) } }}
      component={Scanner}
    ></Tab.Screen>
    <Tab.Screen
      name="ShopMap"
      options={{ headerShown: false, tabBarIcon: (props) => {console.log(props); return (<Image style={styles.image4} source={require("../assets/Location.png")}/>) } }}
      component={ShopMap}
    ></Tab.Screen>
    <Tab.Screen
      name="Articles"
      options={{ headerShown: false, tabBarIcon: (props) => {console.log(props); return (<Image style={styles.image5} source={require("../assets/SearchMore.png")}/>) } }}
      component={Articles}
    ></Tab.Screen>
  </Tab.Navigator>
);
const styles = StyleSheet.create({
 
  image1: {
    width: 45,
    height: 45,
    marginTop: 5,
  },
  image2: {
    width: 45,
    height: 45,
    marginTop: 5,
   
  },
  image3: {
    width: 64,
    height: 64,
    marginTop: -80,
    
  },
  image4: {
    width: 45,
    height: 45,
    marginTop: 5,
    
  },
  image5: {
    width: 45,
    height: 45,
    marginTop: 5,
    
  },
});
export default AppNavigator;
