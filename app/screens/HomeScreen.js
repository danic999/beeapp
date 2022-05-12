import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Footer from "../components/Footer";
import HeadingProfile from "../components/HeadingProfile";
function HomeScreen(props) {
  return (
    <View style={styles.body}>
      <HeadingProfile numOfPoints={226}></HeadingProfile>
      <View style={styles.content}>
        <Text style={styles.text}>Posljednje transakcije  </Text>
        <Text style={styles.text2}>Pogledaj sve</Text>
      </View>
      <Footer></Footer>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    position:'relative'
  },
  content: {
    backgroundColor: "#fff",
    flex: 0.8,
  },
  text:{
    color: "#000000",
    fontSize: 16,
    fontWeight:'bold',
    paddingLeft: 15,
    paddingTop: 19,
    },
  text2:{
    color: "#3491db",
    fontSize: 16,
    alignSelf: "flex-end",
    fontWeight:'bold',
    marginRight:15,
    marginTop:-22
  },
  HeadingProfile: {
    flex: 0.18,
  },
  navigationBar: {
    backgroundColor: "#0a0c0b",
    flex: 0.12,
  },
});

export default HomeScreen;
