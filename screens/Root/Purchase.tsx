import { useRoute, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Container from "../../components/Container";
import Header from "../../components/Header";
import medicines from "../../data/medicines";
import pharmaciesNearby from "../../data/pharmaciesNearby";
import ProductImage from "../../components/product/ProductImage";
import { randomNumberInterval } from "../../components/cards/PharmacyItem";
import { TouchableOpacity } from "@gorhom/bottom-sheet";
import Colors from "../../constants/Colors";

const pieces = randomNumberInterval(18, 25);
const price = randomNumberInterval(80, 120);

const Purchase = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const [items, setItems] = useState(1);

  const product = medicines[route.params.id];
  const pharmacy = pharmaciesNearby[route.params.id];

  return (
    <Container style={styles.container}>
      <Header iconColor="gray" />
      <Text style={styles.title}>Purchase Item</Text>
      <View>
        <Text>Pharmacy Name</Text>
        <View>
          <Text>{product.brand}</Text>
        </View>
      </View>
      <View>
        <Text>Location</Text>
        <View>
          <Text>{pharmacy.name}</Text>
        </View>
      </View>
      <View>
        <Text>Purchased Item</Text>
        <View>
          <ProductImage />
          <View>
            <View>
              <Text>{product.brand}</Text>
              <Text>{product.generic}</Text>
              <Text>{`${pieces} Tablets per pack`}</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Text>{`₱${price * items}.00`}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => setItems(items - 1)}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 40,
                    height: 40,
                    backgroundColor: Colors.secondary,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ color: Colors.primary, fontSize: 18 }}>-</Text>
                </TouchableOpacity>
                <Text>{items}</Text>
                <TouchableOpacity
                  onPress={() => setItems(items + 1)}
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    width: 40,
                    height: 40,
                    backgroundColor: Colors.secondary,
                    borderRadius: 10,
                  }}
                >
                  <Text style={{ color: Colors.primary, fontSize: 18 }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("QRCode")}>
          <Text>GENERATE PURCHASE CODE</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text>CANCEL PRODUCT PURCHASE</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Purchase;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: "inter-bold",
    fontSize: 24,
  },
});
