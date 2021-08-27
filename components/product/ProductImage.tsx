import React from "react";
import { StyleSheet, Image, View } from "react-native";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";

const ProductImage = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        resizeMode="contain"
        style={styles.image}
        source={require("../../assets/medicine.png")}
      />
    </View>
  );
};

export default ProductImage;

const styles = StyleSheet.create({
  imageContainer: {
    width: Layout.window.width / 3 - 24,
    height: Layout.window.width / 3 - 24,
    backgroundColor: Colors.productBackground,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: "75%",
    height: undefined,
    aspectRatio: 1,
  },
});
