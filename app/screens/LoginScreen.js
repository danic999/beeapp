import { StyleSheet, Text, View, TextInput } from "react-native";
import Heading from "../components/Heading";
import ButtonBC from "../components/ButtonBC";

const LoginScreen = () => {
  return (
    <View style={styles.body}>
      <Heading />
      <View style={styles.view1}>
        <Text style={styles.text}>
          Radi li git <Text style={styles.text2}>Card</Text>
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
      <ButtonBC title={"Prijavi se"} />
      <View style={styles.view_end}>
        <Text style={styles.text1}>
          Još nemate račun?{" "}
          <Text style={styles.text_black}>Napravite račun</Text>
        </Text>
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
    position: "absolute",
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

  view_end: {
    paddingBottom: 40,
  },
  /*footer:{
    flex: 0.5,  
    paddingBottom: 0,
    height:'15%',
    width:'100%',
    backgroundColor: '#0E0B26',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },*/

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

export default LoginScreen;
