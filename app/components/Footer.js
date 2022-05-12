import React from "react";
import { Text, View, StyleSheet, Image, ImageBackground } from "react-native";
const Footer=({ navigation })=> {
  return (
      <View style={styles.navigationBar}>
        <ImageBackground source={require("../assets/Subtract.png")} style={styles.image}>
            <Image style={styles.image1} source={require("../assets/Home.png")} />
            <Image style={styles.image2} source={require("../assets/ChatBubble.png")} />
            <Image style={styles.image3} source={require("../assets/Group1.png")}/>
            <Image style={styles.image4} source={require("../assets/Location.png")}/>
            <Image style={styles.image5} source={require("../assets/SearchMore.png")}/>
        </ImageBackground>
      </View>
     
  );
}

const styles = StyleSheet.create({
  
  navigationBar: {
    flex: 0.12,
      
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    height:80,
    width:397,
    flexDirection: "row", flexWrap: "wrap", 
  },
  image1:{
    width:45,
    height:45,
    marginTop:18,
    marginLeft:17
},
image2:{
    width:45,
    height:45,
    marginTop:18,
    marginLeft:30
},
image3:{
    width:64,
    height:64,
    marginTop:-32,
    marginLeft:30
},
image4:{
    width:45,
    height:45,
    marginTop:18,
    marginLeft:30
},
image5:{
    width:45,
    height:45,
    marginTop:18,
    marginLeft:20
},

});

export default Footer;