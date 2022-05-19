import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Scanner() {
  return (
    <View style={styles.body}>
      <View style={styles.footer}>
      <Text style={styles.text}>Skeniraj svoj Bar kod</Text>
      <Text style={styles.text2}>Pokažite svoj bar kod blagajniku kako biste dobili bodove</Text>
      <Image style={styles.image} source={require("../assets/barcode.png")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: "relative",
  },
  footer:{
    flex: 1,
    backgroundColor: '#ffffff',
    position: "relative",
    marginTop:300,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    
  },
  text:{
    color: "#1a87dd",
    fontSize: 48,
    textAlign:'center',
    marginLeft:55,
    marginRight:55,
    marginTop:25
  },
text2:{
  color: "#1a1a1a",
  opacity:0.5,
  fontSize: 20,
  textAlign:'center',
  marginLeft:21,
  marginRight:21,
  marginTop:8
},
image:{
width: 262,
height: 116,
marginLeft:59,
marginTop:32
}
});
