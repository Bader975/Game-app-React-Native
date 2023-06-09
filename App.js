import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
// StatusBar
import React, { useState } from "react";
import StartGame from "./screens/StartGame";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

import * as Font from "expo-font";
import AppLoading from 'expo-app-loading';

import GameScreen from "./screens/GameScreen";
import GameOver from "./screens/GameOver";
import Colors from "./constants/colors";





export default function App() {
  const [userNumber, setUserNumber] = useState("");
  const [isGameOver, setIsGameOver] = useState(true);
  const [attemptsNumber, setAttemptsNumber] = useState(0);
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const fetchFonts = () => {
    return Font.loadAsync({               // <- add return here
      "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });
  };
    
  // const [fontsLoaded] = useFonts({
  //   "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
  //   "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  // });

  // if (!fontsLoaded) {
  //   return <AppLoading  />;
  // }
  if (!isDataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  const handleNumber = (chosenNumber) => {
    setUserNumber(chosenNumber);
    setIsGameOver(false);
  };

  const handleGameOver = () => {
    setIsGameOver(true);
  };

  const startNewGame = () => {
    setUserNumber("");
    setAttemptsNumber(0);
  };

  const numberOfAttempts = () => {
    setAttemptsNumber((attemptsNumber) => attemptsNumber + 1);
  };

  let appScreen = <StartGame PickedNumber={handleNumber} />;
  if (!userNumber) {
    appScreen = <StartGame PickedNumber={handleNumber} />;
  }
  if (userNumber) {
    appScreen = (
      <GameScreen
        PickedNumber={userNumber}
        onGameOver={handleGameOver}
        attemptsNumber={numberOfAttempts}
      />
    );
  }

  if (isGameOver && userNumber) {
    appScreen = (
      <GameOver
        attempts={attemptsNumber}
        userNumber={userNumber}
        startNewGame={startNewGame}
      />
    );
  }
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient
        colors={[Colors.subColor, Colors.color800]}
        style={styles.appScreen}
      >
        <ImageBackground
          source={require("./assets/images/Background.jpg")}
          // Control how Image how the Background set
          resizeMode="cover"
          // now To make the background image take all the avalible spaece we set the style to flex: 1
          style={{ flex: 1 }}
          // Image For Style Only Called ==> imageStyle <==
          imageStyle={{ opacity: 0.5 }}
        >
          <SafeAreaView style={styles.appScreen}>
            {/* Main Component */}
            {/* <GameOver></GameOver> */}
            {appScreen}
          </SafeAreaView>
          {/* Main Component */}
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  appScreen: {
    flex: 1,
  },
});
