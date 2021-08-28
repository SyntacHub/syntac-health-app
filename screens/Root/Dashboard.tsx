import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FirstAidInfo from "../../components/cards/FirstAidInfo";
import HealthNews from "../../components/cards/HealthNews";
import Container from "../../components/Container";
import SearchBarInput from "../../components/inputs/SearchBarInput";
import RecentlyViewedProduct from "../../components/product/RecentlyViewedProduct";
import Colors from "../../constants/Colors";
import healthNews from "../../data/healthNews";
import medicines from "../../data/medicines";

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
        <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
          <Image
            source={require("../../assets/avatar.jpg")}
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              backgroundColor: Colors.gray,
            }}
          />
        </TouchableOpacity>
      </View>
      <Text style={styles.greetings}>Good Day! Stefani Joanne</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Search")}>
        <SearchBarInput />
      </TouchableOpacity>
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>Recently Viewed</Text>
        <FlatList
          data={medicines.slice(0, 5)}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{ marginHorizontal: 8 }} />
          )}
          renderItem={({ item }) => (
            <RecentlyViewedProduct
              onPress={() => navigation.navigate("Product", { id: item.id })}
              productName={item.brand}
              productCategory={item.shortDesc}
            />
          )}
          keyExtractor={(item) => item.brand}
        />
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>Recommended for Homes</Text>
        <FirstAidInfo />
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>Health News and Update</Text>
        <FlatList
          data={healthNews.slice(0, 5)}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => (
            <View style={{ marginHorizontal: 8 }} />
          )}
          renderItem={({ item }) => (
            <HealthNews
              primaryColor={item.primaryColor}
              secondaryColor={item.secondaryColor}
              title={item.title}
              description={item.description}
              iconName={item.iconName}
            />
          )}
          keyExtractor={(item) => item.title}
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
    marginBottom: 16,
  },
  greetings: {
    width: "80%",
    fontSize: 28,
    fontFamily: "poppins-bold",
    lineHeight: 32,
  },
  categoryContainer: {
    marginVertical: 8,
  },
  category: {
    fontFamily: "inter-bold",
    marginBottom: 10,
  },
});
