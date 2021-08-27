import { TouchableOpacity } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Container from "../../components/Container";
import Header from "../../components/Header";
import MedicationItem from "../../components/product/MedicationItem";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import medicines from "../../data/medicines";

interface Props {}

const Medications: React.FC<Props> = () => {
  const navigation = useNavigation<any>();
  return (
    <Container
      style={styles.container}
      background={Colors.background}
      additionalPaddingTop={0}
    >
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Medication List</Text>
      </View>
      <View style={styles.innerContainer}>
        <FlatList
          data={medicines.slice(0, 15)}
          ItemSeparatorComponent={() => <View style={{ marginVertical: 8 }} />}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Product", { id: item.id })}
            >
              <MedicationItem
                productName={item.brand}
                productDescription={item.desc}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
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
