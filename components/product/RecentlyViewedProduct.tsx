import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Layout from "../../constants/Layout";
import ProductImage from "./ProductImage";

interface Props {
  productName: string;
  productCategory?: string;
}

const RecentlyViewedProduct: React.FC<Props> = ({
  productName,
  productCategory,
}) => {
  return (
    <View style={styles.container}>
      <ProductImage />
      <Text style={styles.productName}>{productName}</Text>
      {!!productCategory && (
        <Text style={styles.productCategory}>{productCategory}</Text>
      )}
    </View>
  );
};

export default RecentlyViewedProduct;

const styles = StyleSheet.create({
  container: {
    width: Layout.window.width / 3 - 24,
  },
  productName: {
    marginTop: 4,
    fontSize: 13,
    fontFamily: "inter-bold",
  },
  productCategory: {
    fontFamily: "inter-medium",
    fontSize: 12,
  },
});
