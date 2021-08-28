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
import { AntDesign, FontAwesome } from "@expo/vector-icons";

const pieces = randomNumberInterval(18, 25);
const price = randomNumberInterval(80, 120);

const Purchase = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const [items, setItems] = useState(1);

  const product = medicines[route.params.id];
  const pharmacy = pharmaciesNearby[route.params.id];

  return (
    <Container style={styles.container} isScrollable additionalPaddingTop={0}>
      <Header iconColor="gray" />
      <Text style={styles.title}>Purchase Item</Text>
      <View style={{ marginVertical: 6 }}>
        <Text style={styles.label}>Pharmacy Name</Text>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{product.brand}</Text>
        </View>
      </View>
      <View style={{ marginVertical: 6 }}>
        <Text style={styles.label}>Location</Text>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>{pharmacy.name}</Text>
        </View>
      </View>
      <View style={{ marginVertical: 6 }}>
        <Text style={styles.label}>Purchased Item</Text>
        <View style={styles.productContainer}>
          <ProductImage />
          <View style={styles.productContent}>
            <View>
              <Text style={styles.productBrand}>{product.brand}</Text>
              <Text style={styles.productGeneric}>{product.generic}</Text>
              <Text
                style={styles.productDesc}
              >{`${pieces} Tablets per pack`}</Text>
            </View>
            <View
              style={{
                marginTop: "auto",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={styles.productPrice}>{`₱${price * items}.00`}</Text>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <TouchableOpacity
                  onPress={() => setItems(items - 1)}
                  style={styles.itemButton}
                >
                  <Text style={styles.itemButtonText}>-</Text>
                </TouchableOpacity>
                <Text
                  style={{ marginHorizontal: 12, fontFamily: "inter-bold" }}
                >
                  {items}
                </Text>
                <TouchableOpacity
                  onPress={() => setItems(items + 1)}
                  style={styles.itemButton}
                >
                  <Text style={styles.itemButtonText}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginVertical: 12 }}>
          <View
            style={{
              marginBottom: 8,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text style={[styles.label, { marginBottom: 0 }]}>
              Use Pharmacy Vouchers
            </Text>
            <Text
              style={{
                fontFamily: "inter-regular",
                fontSize: 11,
                color: Colors.gray,
              }}
            >
              More Vourchers ={">"}
            </Text>
          </View>
          <View style={styles.voucherContainer}>
            <View style={styles.vourcherHeader}>
              <View style={styles.vourcherIconContainer}>
                <FontAwesome name="bell-o" size={18} color={Colors.primary} />
              </View>
              <View style={styles.vourcherSubHeader}>
                <Text style={styles.vourcherTitle}>
                  ₱15 off Min. Spend ₱200{" "}
                </Text>
                <Text style={styles.vourcherPharmacy}>Mercury Drug</Text>
              </View>
            </View>
            <Text style={styles.vourcherDescription}>
              Purchase Any items from our pharmacy and get big discounts!
            </Text>
          </View>
        </View>
        <View style={{ marginVertical: 10 }} />
        <TouchableOpacity
          style={[styles.mainButton, { backgroundColor: Colors.primary }]}
          onPress={() => navigation.navigate("QRCode")}
        >
          <Text style={[styles.mainButtonText, { color: Colors.white }]}>
            Generate Purchase Code
          </Text>
          <AntDesign name="qrcode" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.mainButton, { backgroundColor: "#ffcccc" }]}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.mainButtonText, { color: "#FD0606" }]}>
            Cancel Product Purchase
          </Text>
          <AntDesign name="closecircleo" size={24} color="#FD0606" />
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
    fontSize: 32,
  },
  label: {
    fontFamily: "inter-bold",
    fontSize: 16,
    marginBottom: 8,
  },
  nameContainer: {
    backgroundColor: "#eee",
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  name: {
    fontFamily: "inter-medium",
  },
  itemButton: {
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    backgroundColor: Colors.secondary,
    borderRadius: 10,
  },
  itemButtonText: {
    fontFamily: "inter-bold",
    color: Colors.primary,
    fontSize: 20,
  },
  productContainer: {
    flexDirection: "row",
  },
  productContent: {
    marginLeft: 16,
    flex: 1,
  },
  productBrand: {
    fontFamily: "inter-bold",
    fontSize: 14,
  },
  productGeneric: {
    fontFamily: "inter-medium",
    fontSize: 12,
  },
  productDesc: {
    fontFamily: "inter-regular",
    fontSize: 12,
  },
  productPrice: {
    fontFamily: "inter-bold",
    fontSize: 14,
  },
  mainButton: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainButtonText: {
    fontFamily: "inter-semibold",
  },
  voucherContainer: {
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  vourcherHeader: {
    flexDirection: "row",
  },
  vourcherIconContainer: {
    backgroundColor: Colors.white,
    borderRadius: 50,
    height: 32,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  vourcherIcon: {},
  vourcherSubHeader: {
    marginLeft: 12,
  },
  vourcherTitle: {
    fontFamily: "inter-bold",
  },
  vourcherPharmacy: {
    fontFamily: "inter-regular",
  },
  vourcherDescription: {
    fontFamily: "inter-medium",
    marginTop: 8,
  },
});
