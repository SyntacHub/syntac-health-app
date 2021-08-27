import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Container from "../../components/Container";
import MedicationItem from "../../components/product/MedicationItem";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import medicines from "../../data/medicines";

const Profile = () => {
  const navigation = useNavigation<any>();

  return (
    <Container style={styles.container} additionalPaddingTop={0}>
      <View style={styles.header}>
        <Image
          style={{
            width: "35%",
            height: undefined,
            aspectRatio: 1,
          }}
          resizeMode="contain"
          source={require("../../assets/avatar.jpg")}
        />
        <Text>Stefani Joanne</Text>
        <Text>UserID: 3w498SI34t893t89tngsd</Text>
        <View
          style={{
            marginTop: "auto",
            marginBottom: -40,
            height: 80,
            width: "80%",
            flexDirection: "row",
            backgroundColor: Colors.white,
            borderRadius: 20,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,
            elevation: 3,
          }}
        >
          <View>
            <View>
              <Text>Items Searched:</Text>
              <Text>20</Text>
            </View>
          </View>
          <View>
            <View>
              <Text>Pharmacies Discovered::</Text>
              <Text>12</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <View>
          <Text>Purchase History</Text>
          <FlatList
            data={medicines.slice(0, 15)}
            ItemSeparatorComponent={() => (
              <View style={{ marginVertical: 8 }} />
            )}
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
      </View>
    </Container>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    width: Layout.window.width,
    aspectRatio: 7 / 5,
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 28,
    borderBottomLeftRadius: 28,
  },
  content: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
});
