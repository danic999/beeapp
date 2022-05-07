import React, {useState} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const Home = () => {
  return (
    <View style={styles.heading}>
    <Text style={styles.text}>Ukupno bodova</Text>
    <Text style={styles.text2}>126 <Image style={styles.image} source={require("../assets/BeeCard.png")}/></Text>
    
    
    </View>
 
      
     
  );
};

const styles = StyleSheet.create({
  body:{
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    },
heading:{
    paddingTop: 0,
    height:'20%',
    width:'100%',
    backgroundColor: '#0D0B26',
    justifyContent:'center',
    alignItems: 'center',
    height:120
},
  text:{
      color:'#ffffff',
      fontSize:20,
      alignSelf:'flex-start'
  },
  text2:{
      fontSize:40,
      color:'#ffffff',
      alignSelf:'flex-start'
  },
  image:{
    width:54,
    height:42,
   
  }
});

export default Home;

