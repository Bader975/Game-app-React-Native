import { StyleSheet, ImageBackground } from "react-native";
import StartGame from "./screens/StartGame";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <LinearGradient colors={["#ddb55f", "#72042c"]} style={styles.appScreen}>
        <ImageBackground
          source={require("./assets/images/Background.jpg")}
          // Control how Image how the Background set
          resizeMode="cover"
          // now To make the background image take all the avalible spaece we set the style to flex: 1
          style={{ flex: 1 }}
          // Image For Style Only Called ==> imageStyle <==
          imageStyle={{ opacity: 0.5 }}
        >
          <StartGame />
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  appScreen: {
    flex: 1,
    // backgroundColor: "#ddb55f",
  },
});
