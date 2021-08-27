import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Colors from "../../constants/Colors";

import { RootTabScreenProps } from "../../types";

interface Props extends RootTabScreenProps<"Dashboard"> {}

const Dashboard: React.FC<Props> = ({ navigation }) => {
  return (
    <Container style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require("../../assets/menu.png")}
            style={{
              width: 28,
              height: 28,
              tintColor: "black",
            }}
          />
        </TouchableOpacity>
        <Image
          source={require("../../assets/avatar.jpg")}
          style={{
            width: 36,
            height: 36,
            borderRadius: 18,
            backgroundColor: Colors.gray,
          }}
        />
      </View>
      <Text style={styles.title}>Good Day! Stefani Joanne</Text>
    </Container>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    width: "80%",
    fontSize: 24,
    fontFamily: "poppins-bold",
    lineHeight: 28,
  },
});
