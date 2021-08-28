import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import React, { useRef } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Voucher from "../../components/cards/Voucher";
import Container from "../../components/Container";
import Header from "../../components/Header";
import MedicationItem from "../../components/product/MedicationItem";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import medicines from "../../data/medicines";

const Profile = () => {
  const navigation = useNavigation<any>();
  const bottomSheetRef = useRef<BottomSheet>(null);
  const insets = useSafeAreaInsets();

  return (
    <>
      <Container
        style={styles.container}
        background={Colors.background}
        isScrollable
        offInsetTop
        additionalPaddingTop={0}
      >
        <View style={[styles.header, { paddingTop: insets.top }]}>
          <Header
            rightButton={
              <TouchableOpacity
                onPress={() => {
                  if (bottomSheetRef) {
                    bottomSheetRef.current?.snapTo(1);
                  }
                }}
              >
                <FontAwesome name="ticket" size={24} color="white" />
              </TouchableOpacity>
            }
          />
          <Image
            style={{
              borderRadius: 200,
              width: "45%",
              height: undefined,
              aspectRatio: 1,
              marginBottom: 10,
            }}
            resizeMode="contain"
            source={require("../../assets/avatar.jpg")}
          />
          <Text
            style={{
              color: Colors.white,
              fontFamily: "poppins-bold",
              fontSize: 28,
            }}
          >
            Stefani Joanne
          </Text>
          <Text
            style={{
              color: Colors.white,
              fontFamily: "inter-medium",
            }}
          >
            UserID: 3w498SI34t893t89tngsd
          </Text>
          <View style={styles.statContainer}>
            <View
              style={{
                flex: 1,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <FontAwesome name="plus" size={24} color="#FD4E5D" />
              <View style={{ flex: 1, marginLeft: 12 }}>
                <Text style={{ fontFamily: "inter-medium" }}>
                  Items Searched:
                </Text>
                <Text style={{ fontFamily: "inter-bold" }}>20</Text>
              </View>
            </View>
            <View style={styles.statDivider} />
            <View
              style={{
                flex: 1,
                padding: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View style={{ flex: 1, marginRight: 12 }}>
                <Text style={{ fontFamily: "inter-medium" }}>
                  Pharmacies Discovered:
                </Text>
                <Text style={{ fontFamily: "inter-bold" }}>12</Text>
              </View>
              <MaterialIcons
                name="local-pharmacy"
                size={24}
                color={Colors.background}
              />
            </View>
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.innerContent}>
            <Text
              style={{
                fontFamily: "inter-bold",
                fontSize: 18,
                marginBottom: 16,
              }}
            >
              Purchase History
            </Text>
            <FlatList
              data={medicines.slice(0, 15)}
              ItemSeparatorComponent={() => (
                <View style={{ marginVertical: 8 }} />
              )}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Product", { id: item.id })
                  }
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
        </View>
      </Container>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={[0, "40%", "60%", "90%"]}
        backgroundComponent={({ style }) => (
          <View style={[styles.customModal, style]} />
        )}
      >
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>Vouchers</Text>
          <View style={{ marginVertical: 4 }} />
          <FlatList
            data={[...Array(3).keys()]}
            ItemSeparatorComponent={() => (
              <View style={{ marginVertical: 6 }} />
            )}
            renderItem={() => (
              <TouchableOpacity onPress={() => alert("HEllo")}>
                <Voucher />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.toString()}
          />
        </BottomSheetScrollView>
      </BottomSheet>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    width: Layout.window.width,
    aspectRatio: 1,
    backgroundColor: Colors.background,
    borderBottomRightRadius: 28,
    borderBottomLeftRadius: 28,
    alignItems: "center",
  },
  content: {
    paddingVertical: 80,
    paddingHorizontal: 24,
    backgroundColor: Colors.white,
    zIndex: -1,
  },
  innerContent: {
    backgroundColor: "#F7F7F7",
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 24,
  },
  statContainer: {
    zIndex: 10,
    marginTop: "auto",
    marginBottom: -70,
    height: 80,
    width: "90%",
    flexDirection: "row",
    backgroundColor: Colors.white,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
  },
  statDivider: {
    width: 2,
    height: "80%",
    backgroundColor: Colors.gray,
  },
  contentContainer: {
    paddingTop: 12,
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: "inter-bold",
    fontSize: 26,
    marginBottom: 16,
  },
  customModal: {
    backgroundColor: "#f2f2f2",
    borderRadius: 28,
  },
});
