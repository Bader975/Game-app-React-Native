import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import MainButton from "../components/MainButton";

export default function StartGame() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonConatainer}>
        <View style={{ flex: 1 }}>
          <MainButton>Rest</MainButton>
        </View>
        <View style={{ flex: 1 }}>
          <MainButton>Confirm</MainButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 25,
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
    height: 50,
    width: 80,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "#ddb52f",
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    marginVertical: 15,
  },

  buttonConatainer: {
    flexDirection: "row",
    // justifyContent:'space-evenly',
    alignItems: "stretch",
  },
});
