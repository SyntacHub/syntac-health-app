import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

interface Props {
  primaryColor: string;
  secondaryColor: string;
  title: string;
  description: string;
}

const HealthNews: React.FC<Props> = ({
  primaryColor,
  secondaryColor,
  title,
  description,
}) => {
  return (
    <View style={[styles.container, { backgroundColor: secondaryColor }]}>
      <View style={styles.iconContainer}>
        <FontAwesome name="heart-o" size={16} color={primaryColor} />
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
    paddingVertical: 16,
  },
  iconContainer: {
    height: 32,
    width: 32,
    backgroundColor: Colors.white,
    padding: 8,
    borderRadius: 20,
  },
  title: {
    fontFamily: "inter-bold",
    fontSize: 13,
    marginTop: 10,
  },
  description: {
    marginTop: 6,
    fontFamily: "inter-medium",
    fontSize: 11,
  },
});
