import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";

const FirstAidInfo: React.FC = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <FontAwesome name="star-o" size={20} color={Colors.primary} />
        </View>
        <Text style={styles.headerText}>Having a First Aid Kit</Text>
      </View>
      <Text style={styles.description}>
        A single household must have a first aid kit .Save yourself money and
        keep a stocked first aid kit close by.
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("FirstAid")}
        style={styles.button}
      >
        <Text style={styles.buttonText}>View first aid kit items</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FirstAidInfo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.infoBackground,
    padding: 16,
    borderRadius: 12,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: Colors.white,
    padding: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  headerText: {
    fontFamily: "inter-bold",
    fontSize: 22,
  },
  description: {
    marginVertical: 10,
    fontFamily: "inter-medium",
    fontSize: 13,
  },
  button: {
    marginTop: 10,
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    textTransform: "uppercase",
    color: Colors.primary,
    fontFamily: "inter-bold",
  },
});
