import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Linking,
  TextInput,
  ScrollView,
  Image,
  Logo,
  TouchableOpycity,
  Alert,
} from "react-native";

import Heading from "./Heading";
import ButtonBC from "./ButtonBC";
const RegisterScreen = () => {
  return (
    <View style={styles.body}>
      <Heading />
      <View style={styles.view1}>
        <Text style={styles.text}>
          Bee <Text style={styles.text2}>Card</Text>
        </Text>
      </View>

      <View style={styles.view3}>
        <TextInput style={styles.input} placeholder="Ime" />
        <TextInput style={styles.input} placeholder="Prezime" />
        <TextInput style={styles.input} placeholder="Email" />
        <TextInput style={styles.input} placeholder="Datum rođenja" />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Pin"
        />
      </View>

      <ButtonBC title={"Registracija"} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#0E0B26",
    fontSize: 60,
    margin: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  text1: {
    fontSize: 15,
    margin: 20,
    paddingTop: 15,
    textAlign: "center",
  },
  view1: {
    paddingVertical: 20,
  },
  text2: {
    color: "#ffc600",
  },

  view3: {
    flex: 3,
  },
  input: {
    height: 48,
    width: 320,
    marginHorizontal: 20,
    marginVertical: 7,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#6c6a6a",
    padding: 5,
    marginBottom: 10,
  },
});

export default RegisterScreen;
