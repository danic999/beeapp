import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Title(props) {
  return (
    <View style={styles.view1}>
      <Text style={styles.text}>
        Bee <Text style={styles.text2}>Card</Text>
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  view1: {
    paddingVertical: 20,
  },
  text: {
    color: "#0E0B26",
    fontSize: 40,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  text2: {
    color: "#ffc500",
  },
});

export default Title;
