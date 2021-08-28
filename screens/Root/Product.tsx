import { Feather } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Container from "../../components/Container";
import Header from "../../components/Header";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import medicines from "../../data/medicines";

interface Props {}

const Product: React.FC<Props> = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const insets = useSafeAreaInsets();

  const product = medicines[route.params.id - 1];

  return (
    <Container
      style={styles.container}
      isScrollable
      offInsetTop
      additionalPaddingTop={0}
    >
      <View style={[styles.header, { paddingTop: insets.top }]}>
        <Header />
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../../assets/medicine.png")}
          />
        </View>
      </View>
      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{product.generic}</Text>
          <Text style={styles.type}>{product.brand}</Text>
          <Text style={styles.size}>20 Tablets Per Pack</Text>
        </View>
        <View style={{ marginVertical: 8 }}>
          <Text style={styles.descriptionLabel}>Description</Text>
          <Text style={styles.description}>{product.desc}</Text>
        </View>
        <View style={{ marginVertical: 8 }}>
          <Text style={styles.descriptionLabel}>Directions</Text>
          <Text style={styles.description}>{product.directions}</Text>
        </View>
        <View style={{ marginVertical: 8 }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProductMap")}
            style={[styles.button, { backgroundColor: Colors.primary }]}
          >
            <Text style={[styles.buttonText, { color: Colors.white }]}>
              Find Nearby Availability
            </Text>
            <Feather name="map" size={24} color={Colors.white} />
          </TouchableOpacity>
          <View style={{ marginVertical: 8 }} />
          <TouchableOpacity
            onPress={() => navigation.navigate("Medication")}
            style={[styles.button, { backgroundColor: Colors.secondary }]}
          >
            <Text style={[styles.buttonText, { color: Colors.primary }]}>
              Add to Medication List
            </Text>
            <Feather name="arrow-right" size={24} color={Colors.primary} />
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    width: Layout.window.width,
    aspectRatio: 1 / 1,
    backgroundColor: Colors.secondary,
    borderBottomRightRadius: 28,
    borderBottomLeftRadius: 28,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  image: {
    width: "45%",
    height: undefined,
    aspectRatio: 1,
  },
  size: {
    fontFamily: "inter-medium",
    color: Colors.text,
  },
  content: {
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: "inter-bold",
    fontSize: 24,
    color: Colors.text,
  },
  type: {
    fontFamily: "inter-semibold",
    fontSize: 14,
    color: Colors.text,
  },
  descriptionLabel: {
    fontFamily: "inter-bold",
    fontSize: 18,
    color: Colors.text,
  },
  description: {
    fontFamily: "inter-medium",
    fontSize: 15,
    color: Colors.text,
  },
  button: {
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
  },
  buttonText: {
    fontFamily: "inter-bold",
    fontSize: 14,
  },
});
