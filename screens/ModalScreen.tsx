import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

const ModalScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <Text style={styles.title}>Modal</Text>
      <View style={styles.separator} />
    </View>
  );
};

export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
