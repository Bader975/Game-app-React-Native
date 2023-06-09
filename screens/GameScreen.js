import React, { useState, useEffect } from "react";
import VideoPlayer, { Video } from "react-native-video";
import { View, Text, StyleSheet, Alert, FlatList } from "react-native";
import uuid from 'react-native-uuid';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Title from "../components/Title";
import Guess from "../components/Guess";
import MainButton from "../components/MainButton";
import Card from "../components/Card";
import Colors from "../constants/colors";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let maxNumber = 100;
let minNumber = 1;
export default function GameScreen({
  PickedNumber,
  onGameOver,
  attemptsNumber,
}) {
  let initialGuess = generateRandomBetween(1, 100, PickedNumber);
  const [currentGuess, setGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  const nextGuess = (direction) => {
  
    if (
      (direction === "lower" && currentGuess < PickedNumber) ||
      (direction === "higher" && currentGuess > PickedNumber)
    ) {
      Alert.alert("Please don't lie to me", "you know it's wrong ..", [
        { Text: "try agin", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxNumber = currentGuess;
      const newRandomNum = generateRandomBetween(
        minNumber,
        maxNumber,
        currentGuess
      );
    } else {
      min = currentGuess + 1;
    }
    const newRandomNum = generateRandomBetween(
      minNumber,
      maxNumber,
      currentGuess
    );
    setGuess(newRandomNum);
    // Set Number of attempts
    attemptsNumber();

    // Showing Rounds Number that being Guessed
    setGuessRounds((guessRoundsArray) => [newRandomNum, ...guessRoundsArray]);
  };

  //
  useEffect(() => {
    if (currentGuess == PickedNumber) {
      console.log("React Native app Wins");
      onGameOver();
      // Set Everthing to what is like after palying the game
      maxNumber = 100;
      minNumber = 1;
    }
  }, [currentGuess, onGameOver, PickedNumber]);

  return (
    <View style={styles.gameScreen}>
      <Title>Opponent's Guess</Title>
      <Guess>{currentGuess}</Guess>
      <Card>
        <Text style={styles.titleGuess}>Higher ot Lower?</Text>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <View style={{ flex: 1 }}>
            <MainButton onPress={nextGuess.bind(this, "higher")}>
              <MaterialCommunityIcons name="plus" size={30} color="white" />
            </MainButton>
          </View>
          <View style={{ flex: 1 }}>
            <MainButton onPress={nextGuess.bind(this, "lower")}>
              <MaterialCommunityIcons name="minus" size={30} color="white" />
            </MainButton>
          </View>
        </View>
      </Card>
      <View style={{ flex:1,}} >
        {/* {guessRounds.map((guessRound) => (
          <Text style={styles.titleGuess} key={guessRound}>
            {guessRound}
          </Text>
        ))} */}
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <Text style={styles.guessRounds}>{itemData.index+1}#  App Guess: {itemData.item}</Text>
          )}
          keyExtractor={(item) => uuid.v4()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
    padding: 24,
  },
  titleGuess: {
    fontFamily: "open-sans-bold",
    fontSize: 30,
    textAlign: "center",
    margin: 10,
    color: "white",
  },
  guessRounds: {
    borderColor:Colors.color700,
    borderWidth: 1,
    borderRadius:50,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    textAlign: "center",
    fontSize: 24,
    textAlign: "center",
    color: "#000",
    backgroundColor:Colors.subColor,
     // Used for showdow in Android
     elevation: 8,
     // Now for ios showdow
     shadowColor: "#000",
     shadowOffset: {
       width: 0,
       height: 0,
     },
     shadowOpacity: 0.25,
     shadowRadius: 3,
  },
});
