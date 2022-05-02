import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const InputText = () => {
  return <TextInput style={styles.input} />;
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 0,
    margin: 0,
    position: "absolute",
  },
  view3: {
    flex: 3,
  },
  input: {
    height: 50,
    width: "100%",
    marginHorizontal: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 15,
    marginBottom: 15,
    marginLeft: 25,
  },
});

export default InputText;
