import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React, { useRef, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { Region } from "react-native-maps";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import PharmacyItem from "../../components/cards/PharmacyItem";
import Container from "../../components/Container";
import Header from "../../components/Header";
import pharmaciesNearby from "../../data/pharmaciesNearby";
import { RootTabScreenProps } from "../../types";

interface Props extends RootTabScreenProps<"PharmacyMap"> {}

const PharmacyMap: React.FC<Props> = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [region, setRegion] = useState<Region>({
    latitude: 8.228,
    longitude: 124.2452,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const insets = useSafeAreaInsets();

  return (
    <Container style={styles.container} offInsetTop additionalPaddingTop={0}>
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
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          <Text style={styles.title}>Pharmacies Nearby</Text>
          <View style={{ marginVertical: 4 }} />
          <FlatList
            data={pharmaciesNearby}
            ItemSeparatorComponent={() => (
              <View style={{ marginVertical: 6 }} />
            )}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={() => alert("Coming Soon!")}>
                  <PharmacyItem type="store" {...item} />
                </TouchableOpacity>
              );
            }}
            keyExtractor={(item) => item.id.toString()}
            nestedScrollEnabled
          />
        </BottomSheetScrollView>
      </BottomSheet>
    </Container>
  );
};

export default PharmacyMap;

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
    zIndex: -1,
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
