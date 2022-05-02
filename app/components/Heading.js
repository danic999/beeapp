import { View, Text,Image,StyleSheet } from 'react-native'
import React from 'react'

const Heading = () => {
  return (
   
      <View style={styles.nav}>
         <Image style={styles.image2} source={require("../assets/User.png")}/>
      </View>
   
  )
}
const styles = StyleSheet.create({
  
   nav:{ 
    paddingTop: 0,
    height:'20%',
    width:'100%',
    backgroundColor: '#0D0B26',
    justifyContent:'center',
    alignItems: 'center',
    height:120
    
  },
  text_nav:{
    color:'#fff',
    fontSize:25,
     margin: 20,
  },
  text_nav1:{
    color:'#fff',
    fontSize:15,
    marginLeft:20,

  },
  image2:{
    width: 49,
    height:45,
    
    
    
  }, 
})

export default Heading