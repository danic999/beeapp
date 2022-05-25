import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

import HeadingProfile from "../components/HeadingProfile";
import Transactions from "../components/Transactions";
function HomeScreen(props) {
  return (
    <View style={styles.body}>
      <HeadingProfile numOfPoints={226}></HeadingProfile>
      <View>
        <Text style={styles.text} >Posljednje transakcije </Text>
        <Text style={styles.text2}>Pogledaj sve</Text>
      </View>
      <View style={styles.transactions}>
        <Transactions name="Namex" date="Sep 25, 01:21 AM" points="25" />
        <Transactions name="Namex" date="Sep 25, 01:21 AM" points="25" />
        <Transactions name="Namex" date="Sep 25, 01:21 AM" points="25" />
        <Transactions name="Namex" date="Sep 25, 01:21 AM" points="25" />
        <Transactions name="Namex" date="Sep 25, 01:21 AM" points="25" />
        <Transactions name="Namex" date="Sep 25, 01:21 AM" points="25" />
        <Transactions name="Namex" date="Sep 25, 01:21 AM" points="25" />
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },

  text: {
    color: "#000000",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 15,
    paddingTop: 19,
  },
  text2: {
    color: "#3491db",
    fontSize: 16,
    alignSelf: "flex-end",
    fontWeight: "bold",
    marginRight: 15,
    marginTop: -22,
  },
  transactions: {
    flex: 0.8,
  },
  HeadingProfile: {
    flex: 0.2,
  },
});

export default HomeScreen;
