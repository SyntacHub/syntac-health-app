import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Container from "../../components/Container";
import Header from "../../components/Header";
import MedicationItem from "../../components/product/MedicationItem";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import medicines from "../../data/medicines";

const FirstAid = () => {
  const navigation = useNavigation<any>();
  const insets = useSafeAreaInsets();

  return (
    <Container
      style={styles.container}
      isScrollable
      offInsetTop
      additionalPaddingTop={0}
    >
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <Header />
        <View style={{ flex: 1 }}>
          <Image
            style={{
              width: "55%",
              height: undefined,
              aspectRatio: 1,
            }}
            resizeMode="contain"
            source={require("../../assets/images/doctor.png")}
          />
        </View>
      </View>
      <View style={styles.content}>
        <View style={{ flexDirection: "row" }}>
          <View style={{ borderRadius: 80, backgroundColor: Colors.secondary }}>
            <Feather name="star" size={24} color="black" />
          </View>
          <Text>Recommended For Homes</Text>
        </View>
        <Text style={{ fontFamily: "inter-bold", fontSize: 28 }}>
          Having a First Aid Kit
        </Text>
        <Text style={{ fontFamily: "inter-medium", fontSize: 13 }}>
          First aid is emergency care given immediately to an injured person.
          The purpose of first aid is to minimize injury and future disability.
        </Text>
        <FlatList
          contentContainerStyle={{ paddingVertical: 28 }}
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

export default FirstAid;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    paddingHorizontal: 8,
    paddingBottom: 16,
    width: Layout.window.width,
    aspectRatio: 1,
    backgroundColor: "#fda6ad",
    borderBottomRightRadius: 28,
    borderBottomLeftRadius: 28,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  content: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
});
