import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface Props {
  name: string;
  status: string;
  distance: string;
}

const PharmacyItem: React.FC<Props> = ({ name, status, distance }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={{ marginRight: 10 }}>
        <FontAwesome5 name="clinic-medical" size={20} color="red" />
      </View>
      <View style={{ flex: 1, marginRight: 10 }}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.status}>{status}</Text>
      </View>
      <View>
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
  distance: {
    fontFamily: "inter-medium",
  },
});
