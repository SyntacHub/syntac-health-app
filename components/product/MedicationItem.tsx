import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "../../constants/Layout";
import ProductImage from "./ProductImage";

interface Props {
  productName: string;
  productDescription?: string;
}

const MedicationItem: React.FC<Props> = ({
  productName,
  productDescription,
}) => {
  return (
    <View style={styles.container}>
      <ProductImage />
      <View style={{ flex: 1, marginLeft: 16 }}>
        <Text style={styles.productName}>{productName}</Text>
        <Text style={styles.productDescription} numberOfLines={5}>
          {productDescription}
        </Text>
      </View>
    </View>
  );
};

export default MedicationItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  productName: {
    marginTop: 4,
    fontSize: 14,
    fontFamily: "inter-bold",
  },
  productDescription: {
    color: "#AAAAAA",
    fontFamily: "inter-medium",
    fontSize: 13,
  },
});
