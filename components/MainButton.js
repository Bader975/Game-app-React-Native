import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

import Colors from "../constants/colors";

export default function MainButton({ children, onPress }) {

  return (
    <View style={styles.mainContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.containerButton, styles.iosPressed]
            : styles.containerButton
        }
        android_ripple={{ color: Colors.color700 }}
      >
        <Text style={styles.textButton}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,

  },
  containerButton: {
    // backgroundColor: "#c60f6a",
    backgroundColor: Colors.color500,
    elevation: 4,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  textButton: {
    color: "#fff",
    textAlign: "center",
    padding: 10,
    borderRadius: 4,
    fontSize: 20,
  },

  iosPressed: {
    opacity: 0.5,
  },
});
