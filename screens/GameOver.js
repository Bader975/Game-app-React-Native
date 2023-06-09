import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Title from "../components/Title";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

export default function GameOver({attempts,userNumber,startNewGame}) {
  return (
    <View style={styles.appContainer}>
      <Title>Game Over ! </Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.imgae}
          source={require("../assets/images/gameover.jpg")}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed <Text style={styles.hightLight}>{attempts}</Text> Attempts To
          guess The Given Number
          <Text style={styles.hightLight}> {userNumber}</Text>
        </Text>
      </View>

      <MainButton onPress={startNewGame}>Start New Game</MainButton>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 350,
    height: 350,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: Colors.color900,
    overflow: "hidden",
    margin: 20,
    backgroundColor: "#fff",
  },
  imgae: {
    width: "100%",
    height: "100%",
    opacity:0.85

  },
  hightLight: {
    fontFamily: "open-sans-bold",
    color: Colors.color500,
  },
  summaryText: {
    padding:14,
    textAlign:'center',
    backgroundColor:'#fff',
    fontFamily: "open-sans",
    fontSize:24,
    borderRadius:25,
    marginHorizontal:15,
    marginVertical:15
  },
});
