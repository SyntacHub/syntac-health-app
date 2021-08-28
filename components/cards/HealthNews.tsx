import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

export interface IHealthNewsProps {
  primaryColor: string;
  secondaryColor: string;
  title: string;
  description: string;
  iconName: React.ComponentProps<typeof FontAwesome>["name"];
}

const HealthNews: React.FC<IHealthNewsProps> = ({
  primaryColor,
  secondaryColor,
  title,
  description,
  iconName,
}) => {
  return (
    <View style={[styles.container, { backgroundColor: secondaryColor }]}>
      <View style={styles.iconContainer}>
        <FontAwesome name={iconName} size={20} color={primaryColor} />
      </View>
      <Text style={[styles.title, { color: primaryColor }]}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default HealthNews;

const styles = StyleSheet.create({
  container: {
    width: Layout.window.width / 2.5,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 24,
  },
  iconContainer: {
    height: 36,
    width: 36,
    backgroundColor: Colors.white,
    padding: 8,
    borderRadius: 20,
  },
  title: {
    fontFamily: "inter-bold",
    fontSize: 14,
    marginTop: 10,
  },
  description: {
    marginTop: 6,
    fontFamily: "inter-medium",
    fontSize: 12,
  },
});
