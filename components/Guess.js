import React, { useState } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import Colors from "../constants/colors";
export default function Guess({ children }) {
  return (
    <View>
      <Text style={styles.Num}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Num: {
    margin: 15,
    padding: 15,
    fontSize: 25,
    fontWeight: "600",
    color: Colors.subColor,
    textAlign: "center",
    borderColor: Colors.subColor,
    borderWidth: 1,
    elevation: 50,
    // Now for ios showdow
    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 5,
  },
});
