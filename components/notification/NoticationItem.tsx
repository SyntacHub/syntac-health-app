import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";

const NoticationItem = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.header}>
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons
            name="lightning-bolt-outline"
            size={24}
            color={Colors.primary}
          />
        </View>
        <Text style={styles.title}>AVAILABILITY ALERT</Text>
      </View>
      <Text style={styles.description}>
        Brand X Vitamin C is now available on Mercury Drug Tubod Iligan City
      </Text>
    </TouchableOpacity>
  );
};

export default NoticationItem;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    paddingHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "#aaa",
    fontSize: 15,
    fontFamily: "inter-bold",
  },
  iconContainer: {
    height: 36,
    width: 36,
    backgroundColor: Colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginRight: 10,
  },
  description: {
    marginTop: 6,
    fontFamily: "inter-medium",
    fontSize: 14,
  },
});
