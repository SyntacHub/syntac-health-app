import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

interface Props {
  text?: string;
  setText?: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBarInput: React.FC<Props> = ({ text, setText }) => {
  return (
    <View style={styles.container}>
      <FontAwesome name="search" size={20} color="#3f3f3f" />
      <TextInput
        value={text}
        onChangeText={(_text) => !!setText && setText(_text)}
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
