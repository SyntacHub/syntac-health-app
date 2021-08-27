import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Colors from "../../constants/Colors";

import { RootTabScreenProps } from "../../types";
import SearchBarInput from "../../components/inputs/SearchBarInput";
import { useNavigation } from "@react-navigation/native";
import RecentlyViewedProduct from "../../components/product/RecentlyViewedProduct";
import FirstAidInfo from "../../components/cards/FirstAidInfo";
import HealthNews from "../../components/cards/HealthNews";

interface Props {}

const Dashboard: React.FC<Props> = () => {
  const navigation = useNavigation<any>();

  return (
    <Container style={styles.container} isScrollable>
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
      <SearchBarInput />
      <Text style={styles.greetings}>Good Day! Stefani Joanne</Text>
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>Recently Viewed</Text>
        <RecentlyViewedProduct
          productName="Paracetamol - Biogesic"
          productCategory="Coughs & Colds"
        />
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>Recommended for Homes</Text>
        <FirstAidInfo />
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>Health News and Update</Text>
        <HealthNews
          primaryColor="#F9B853"
          secondaryColor="#FEF1DD"
          title="Latest Coronavirus Infection updates"
          description="Latest updates by the WHO. "
        />
      </View>
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
  greetings: {
    width: "80%",
    fontSize: 24,
    fontFamily: "poppins-bold",
    lineHeight: 28,
  },
  categoryContainer: {
    marginVertical: 8,
  },
  category: {
    fontFamily: "inter-bold",
    marginBottom: 10,
  },
});
