import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import MainButton from "../components/MainButton";

export default function StartGame() {
  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder="enter number" />
      <MainButton>Rest</MainButton>
      <MainButton>Confirm</MainButton>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    marginTop: 100,
    marginHorizontal: 16,
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#72063c",
    // Used for showdow in Android
    elevation: 8,
    // Now for ios showdow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },

numberInput: {
    fontSize: 30,
    fontWeight: "bold",
    height:40,
    color: "white",
    borderBottomColor:'#ddb52f'
  },
});
