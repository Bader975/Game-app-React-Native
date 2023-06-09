import React, { useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import Colors from "../constants/colors";
export default function Title({ children }) {
  return (
    <View>
      <Text style={styles.title}>{children}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
    title:{
      padding:15,
      fontSize:25,
      fontWeight:'600',
      color:'#fff',
      textAlign:'center',
      borderColor:'#fff',
      borderWidth:1,
      elevation:100,
       // Now for ios showdow
       shadowColor: "#fff",
       shadowOffset: {
         width: 0,
         height: 2,
       },
       shadowOpacity: 0.8,
       shadowRadius: 5,
  
    }
  });
  