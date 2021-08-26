import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { RootTabScreenProps } from "../types";

interface Props extends RootTabScreenProps<"TabOne"> {}

const TabOneScreen: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
    </View>
  );
};

export default TabOneScreen;

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
});
