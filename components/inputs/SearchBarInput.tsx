import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const SearchBarInput = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={20} color="#3f3f3f" />
      <TextInput
        value={text}
        onChangeText={(_text) => setText(_text)}
        style={styles.input}
        placeholder="What are you looking for?"
      />
    </View>
  );
};

export default SearchBarInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderRadius: 8,
    borderColor: "#999CA0",
    marginVertical: 12,
  },
  input: {
    marginLeft: 10,
  },
});
