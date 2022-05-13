import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
} from "react-native";
import Heading from "../components/Heading";
import ButtonBC from "../components/ButtonBC";


const LoginScreen = ({ navigation }) => {

  const testFunc=()=>{
    console.log('test')
  }
  return (
    <View style={styles.body}>
      <Heading />
      <View style={styles.view1}>
        <Text style={styles.text}>
          Bee <Text style={styles.text2}>Card</Text>
        </Text>
      </View>
      <View style={styles.view3}>
        <TextInput
          style={styles.input}
          placeholder="Broj kartice"
        />
        <TextInput style={styles.input}  placeholder="Datum rođenja" />
        <TextInput style={styles.input} placeholder="E-mail" />
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Pin" />
        <Text style={styles.text_left}>Zaboravili ste pin?</Text>

        <Pressable
          style={({ pressed }) => [styles.button]}
      color
          onPress={() => testFunc()}
        >
          <Text style={styles.text_button}>{"Prijava"}</Text>
        </Pressable>
      </View>

      <View style={styles.view_end}>
        <Text style={styles.text1}>
          Još nemate račun?{" "}
          <Text
            style={styles.text_black}
            onPress={() => navigation.navigate("Register")}
          >
            Napravite račun
          </Text>
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
    position: "relative",
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
    paddingLeft: 15,
  },
  button: {
    width: 328,
    height: 48,
    paddingTop: 10,
    backgroundColor: "#ffc600",
    borderRadius: 8,
    alignSelf: "center",
    position: "relative",
  },
  text_button: {
    color: "#0E0B26",
    textAlign: "center",
    fontSize: 15,
  },
});

export default LoginScreen;
