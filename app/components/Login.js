import React, { useState } from "react";
import {
  SafeAreaView,
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
import ScrollViewContext from "react-native/Libraries/Components/ScrollView/ScrollViewContext";
import Heding from "./components/Heading";
import ButtonBC from "./components/ButtonBC";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, SetSubmitted] = useState(false);

  const onPressHendler = () => {
    if (name.length > 2 && password.length > 3) {
      SetSubmitted(!submitted);
    } else {
      Alert.alert("Warning", "The name must be longer then 3 characters", [
        { text: "OK" },
        { text: "Cancle" },
      ]);
    }
  };

  return (
    <View style={styles.body}>
      <Heding />
      <View style={styles.view1}>
        <Text style={styles.text}>
          Bee <Text style={styles.text2}>Card</Text>
        </Text>
      </View>
      <View style={styles.view3}>
        <TextInput
          style={styles.input}
          placeholder="Vaš e-mail ili broj kartice"
        />
        <TextInput style={styles.input} placeholder="Lozinka" />
        <Text style={styles.text_left}>Zaboravili ste lozinku?</Text>
      </View>
      <ButtonBC title={"Prijavi se"} onPressFunction={onPressHendler} />
      <View style={styles.view_end}>
        <Text style={styles.text1}>
          Još nemate račun?{" "}
          <Text style={styles.text_black}>Napravite račun</Text>
        </Text>
      </View>
      <View>
        <Image
          style={styles.image}
          source={require("../src/screens/images/google-logo-825006.png")}
        ></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 0,
    margin: 0,
  },

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
  text1: {
    fontSize: 15,
    margin: 20,
    paddingTop: 15,
    textAlign: "center",
  },
  text2: {
    color: "#ffc500",
  },
  text_left: {
    textAlign: "right",
    marginRight: 20,
    paddingBottom: 10,
  },
  view3: {
    flex: 3,
  },
  image: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 190,
    paddingVertical: 20,
  },
  view_end: {
    paddingBottom: 40,
  },

  text_black: {
    color: "#0E0B26",
  },
  input: {
    height: 50,
    marginHorizontal: 20,
    marginVertical: 7,
    borderWidth: 1,
    borderRadius: 10,
    padding: 5,
    marginBottom: 20,
  },
});

export default Login;
