import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import { RootTabScreenProps } from "../../types";

interface Props extends RootTabScreenProps<"Medications"> {}

const Medications: React.FC<Props> = () => {
  return (
    <Container
      style={styles.container}
      background={Colors.background}
      isScrollable
      additionalPaddingTop={0}
    >
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Medication List</Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Medications</Text>
      </View>
    </Container>
  );
};

export default Medications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    width: Layout.window.width,
    height: Layout.window.height / 5 + 50,
    backgroundColor: Colors.background,
  },
  innerContainer: {
    paddingHorizontal: 28,
    flex: 1,
    minHeight: Layout.window.height - Layout.window.height / 4,
    marginTop: -50,
    paddingTop: 72 - 18,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 42,
    borderTopRightRadius: 42,
  },
  title: {
    fontSize: 32,
    fontFamily: "poppins-bold",
    color: Colors.white,
    textAlign: "center",
  },
});
