import { StyleSheet, Text, View, Image, TextInput, Button} from "react-native";
import React from "react";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.arrow} source={require("../assets/Shape.png")}/>
      <Text style={styles.text}>Moj profil</Text>
      <Image style={styles.settings} source={require("../assets/Settings.png")}/>
      <View style = {styles.line} />
      <View style={styles.profile}>
        <Image
          style={styles.profilePic}
          source={require("../assets/profilna.jpg")}
        ></Image>
        <Text style={styles.text_upload}>Upload fotografije</Text>
      </View>
      <View style={styles.view3}>
          <Text style={styles.text2}>Ime</Text>
      <TextInput style={styles.input}  placeholder="Unesite vaše ime" />
      <Text style={styles.text2}>E-mail</Text>
        <TextInput style={styles.input} placeholder="Unesite vaš e-mail" />
        <Text style={styles.text2}>Broj telefona</Text>
        <TextInput style={styles.input} secureTextEntry={true} placeholder="Unesite vaš broj telefona" />
        </View>
        <View style={styles.button}>
        <Text style={styles.text_button}>Spremi promjene</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    backgroundColor: "white",
    position: "relative",
    },
    text2:{
        marginLeft:25,
        fontSize:14,

    },
    text_button: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 15,
      },
      button: {
        width: 345,
        height: 49,
        paddingTop: 10,
        backgroundColor: "#1a87dd",
        borderRadius: 10,
        alignSelf: "center",
        position: "relative",
        marginBottom:16
      },
    view3: {
        flex: 3,
        marginTop:32
      },
      input: {
        height: 49,
        width:349,
        marginHorizontal: 20,
        marginVertical: 7,
        borderWidth: 1,
        borderColor:'rgba(27, 42, 59, 0.1)',
        borderRadius: 10,
        padding: 5,
        marginBottom: 20,
        paddingLeft: 15,
      },
    arrow:{
        width:14,
        height:11,
        marginTop:66,
        marginLeft:30,
        justifyContent:'flex-start'
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 32,
        marginLeft:147
      },
    text_upload:{
        fontSize:14,
        color:'#1a87dd',
        marginLeft:140,
        marginTop:16
    },
    text:{
        fontSize:20,
        marginTop:-20,
        marginLeft:147,
        marginRight:148,
        justifyContent:'center'
    },
    settings:{
        width:28,
        height:28,
        marginRight:26,
        marginTop:-30,
        marginLeft:331,
        justifyContent:'flex-end'
    },
    line:{
        borderBottomColor: 'black',
        opacity:0.1,
        borderBottomWidth: 1,
        marginTop:15,
        marginLeft:10,
        marginRight:10
    },

});