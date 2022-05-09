import React from "react";
import { Text, View, StyleSheet } from "react-native";

import HeadingProfile from "../components/HeadingProfile";
function HomeScreen(props) {
  return (
    <View style={styles.body}>
      <HeadingProfile numOfPoints={226}></HeadingProfile>
      <View style={styles.content}></View>
      <View style={styles.navigationBar}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "red",
  },
  content: {
    backgroundColor: "blue",
    flex: 0.8,
  },
  HeadingProfile: {
    flex: 0.18,
  },
  navigationBar: {
    backgroundColor: "#f0f",
    flex: 0.12,
  },
});

export default HomeScreen;
