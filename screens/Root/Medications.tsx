import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";

import { RootTabScreenProps } from "../../types";

interface Props extends RootTabScreenProps<"Medications"> {}

const Medications: React.FC<Props> = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Medications</Text>
    </View>
  );
};

export default Medications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
