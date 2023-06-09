import React, { useState } from "react";
import { TextInput, View, StyleSheet, Alert,Text } from "react-native";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";
import Title from "../components/Title";
import Card from "../components/Card";
export default function StartGame({ PickedNumber }) {
  const [inputNumber, setInputNumber] = useState("");
  const[isOn,setIson]=useState(false)

  const confirm = () => {
    // we have to convert the number from sring to Int or Number Type
    const slectedNumber = parseInt(inputNumber);

    if (isNaN(slectedNumber) || slectedNumber > 99 || slectedNumber <= 0) {
      // show alert
      Alert.alert(
        "Invalid Number Was Entered",
        "Number has to be number between 1 and 99",

        // Adding my own Button Customize it
        [{ text: "OK", style: "destructive", onPress: rest }]
      );
      return;
    }
    // Forwrod the Chosen Number to app.js
    PickedNumber(slectedNumber);


    setIson(true);
  };

  const rest = () => {
    setInputNumber("");
  };

  return (
    <View style={styles.container}>
      <Title>Guess My Number</Title>
    <Card>
      <Text style={styles.labelText}>Enter Number</Text>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={inputNumber}
        onChangeText={(enteredNumber) => setInputNumber(enteredNumber)}
      />

      <View style={styles.buttonConatainer}>
        <View style={{ flex: 1 }}>
          <MainButton onPress={rest}>Rest</MainButton>
        </View>
        <View style={{ flex: 1 }}>
          <MainButton onPress={confirm}>Confirm</MainButton>
        </View>
      </View>
    </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:100,
    alignItems:'center'
  },
  titleGuess: {
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    color: "white",
    fontFamily:'open-sans-bold',
  },
  numberInput: {
    height: 50,
    width: 80,
    fontSize: 30,
    fontFamily:'open-sans-bold',
    textAlign: "center",
    color: Colors.subColor,
    borderBottomColor: Colors.subColor,
    borderBottomWidth: 2,
    marginVertical: 15,
  },
  labelText: {
    fontSize: 25,
fontFamily:'open-sans',
    textAlign: "center",
    color: Colors.subColor,
    marginBottom: 10,
    // Used for showdow in Android
    elevation: 100,
    // Now for ios showdow
    shadowColor: "#fff",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },

  buttonConatainer: {
    flexDirection: "row",
  
  },
});
