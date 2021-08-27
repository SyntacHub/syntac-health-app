import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import Layout from "../../constants/Layout";
import ProductImage from "./ProductImage";

interface Props {
  productName: string;
  productCategory?: string;
  onPress: () => void;
}

const RecentlyViewedProduct: React.FC<Props> = ({
  productName,
  productCategory,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <ProductImage />
      <Text style={styles.productName}>{productName}</Text>
      {!!productCategory && (
        <Text style={styles.productCategory}>{productCategory}</Text>
      )}
    </TouchableOpacity>
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
