import React, { useState } from "react";

import { StyleSheet, Text, View, Image } from "react-native";

const Home = () => {
  return (
    <View style={styles.heading}>
      <View style={styles.center}>
        <Text style={styles.text}>Ukupno bodova</Text>
        <Text style={styles.text2}>
          126
          <Image
            style={styles.image}
            source={require("../assets/BeeCard.png")}
          />
        </Text>
      </View>

      <View style={styles.profile}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffff",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    paddingTop: 50,
    flex: 0.15,
    width: "100%",
    backgroundColor: "#0D0B26",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 120,
  },
  center: {
    flexDirection: "column",
    justifyContent: "center",
  },
  text: {
    color: "#ffffff",
    fontSize: 20,
    alignSelf: "flex-start",
  },
  text2: {
    fontSize: 40,
    color: "#ffffff",
    alignSelf: "flex-start",
  },
  image: {
    width: 54,
    height: 42,
  },
});

export default Home;
