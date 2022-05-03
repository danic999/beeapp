import { View, Text, Button, StyleSheet, Pressable } from "react-native";
import React from "react";

const ButtonBC = ({ title, onPressFunction }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button]}
      onPress={onPressFunction}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  button: {
    width: 328,
    height: 48,
    paddingTop: 10,
    backgroundColor: "#ffc600",
    borderRadius: 8,
  },
  text: {
    color: "#0E0B26",
    textAlign: "center",
    fontSize: 15,
  },
});

export default ButtonBC;
