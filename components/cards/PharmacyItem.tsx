import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  type: "store" | "medicine";
  name: string;
  status: string;
  distance: string;
}

export function randomNumberInterval(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const PharmacyItem: React.FC<Props> = ({ type, name, status, distance }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{ marginRight: 10 }}>
        <FontAwesome5 name="clinic-medical" size={20} color="red" />
      </View>
      <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={styles.name}>{name}</Text>
        {!!(type === "medicine") && (
          <Text style={styles.status}>{`Status: ${status}`}</Text>
        )}
      </View>
      <View style={{ alignItems: "flex-end" }}>
        {!!(type === "medicine") && (
          <Text style={styles.money}>₱{randomNumberInterval(50, 120)}.00</Text>
        )}
        <Text style={styles.distance}>{distance}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PharmacyItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    flexDirection: "row",
    borderRadius: 12,
    padding: 16,
  },
  name: {
    fontFamily: "inter-medium",
  },
  status: {
    fontFamily: "inter-regular",
  },
  money: {
    fontFamily: "inter-bold",
  },
  distance: {
    fontFamily: "inter-medium",
  },
});
