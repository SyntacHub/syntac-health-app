import BottomSheet, {
  BottomSheetScrollView,
  TouchableOpacity,
} from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MapView, { Region } from "react-native-maps";
import Modal from "react-native-modal";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Header from "../../components/Header";
import PharmacyItem from "../../components/cards/PharmacyItem";
import Container from "../../components/Container";
import Colors from "../../constants/Colors";
import Layout from "../../constants/Layout";
import pharmaciesNearby from "../../data/pharmaciesNearby";

interface Props {}

const ProductMap: React.FC<Props> = () => {
  const navigation = useNavigation<any>();
  const [region, setRegion] = useState<Region>({
    latitude: 8.228,
    longitude: 124.2452,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(false);
  const insets = useSafeAreaInsets();

  useEffect(() => {}, []);

  return (
    <>
      <Modal
        isVisible={isOpen}
        deviceWidth={Layout.window.width}
        deviceHeight={Layout.window.height}
        onBackdropPress={() => setIsOpen(false)}
      >
        <View
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            padding: 16,
          }}
        >
          <Text style={{ fontFamily: "inter-bold", fontSize: 20 }}>
            Item Unvailable{" "}
          </Text>
          <Text style={{ fontFamily: "inter-semibold", fontSize: 16 }}>
            This Item is not available or out of stock in this pharmacy
          </Text>
          <Text style={{ fontFamily: "inter-regular", fontSize: 13 }}>
            Do you want to get notified when this item is now available in this
            pharmacy??
          </Text>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <TouchableOpacity
              style={{
                paddingVertical: 12,
                borderRadius: 10,
                backgroundColor: Colors.white,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                paddingVertical: 12,
                borderRadius: 10,
                backgroundColor: Colors.primary,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>Yes, Sure!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Container
        style={styles.container}
        background={Colors.background}
        isScrollable
        offInsetTop
        additionalPaddingTop={0}
      >
        <View style={{ paddingTop: insets.top, paddingHorizontal: 16 }}>
          <Header iconColor="black" />
        </View>
        <MapView initialRegion={region} style={styles.map} />
        <BottomSheet
          ref={bottomSheetRef}
          index={0}
          snapPoints={["40%", "60%", "90%"]}
          backgroundComponent={({ style }) => (
            <View style={[styles.customModal, style]} />
          )}
        >
          <BottomSheetScrollView
            contentContainerStyle={styles.contentContainer}
          >
            <Text style={styles.title}>Nearby Available</Text>
            <View style={{ marginVertical: 4 }} />
            <FlatList
              data={pharmaciesNearby}
              ItemSeparatorComponent={() => (
                <View style={{ marginVertical: 6 }} />
              )}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    if (item.status === "Unavailable") {
                      setIsOpen(true);
                    } else {
                      navigation.navigate("Purchase", { id: item.id });
                    }
                  }}
                >
                  <PharmacyItem type="medicine" {...item} />
                </TouchableOpacity>
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </BottomSheetScrollView>
        </BottomSheet>
      </Container>
    </>
  );
};

export default ProductMap;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
  },
  contentContainer: {
    paddingTop: 12,
    paddingHorizontal: 24,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  title: {
    fontFamily: "inter-bold",
    fontSize: 26,
    marginBottom: 16,
  },
  customModal: {
    backgroundColor: "white",
    borderRadius: 28,
  },
});
