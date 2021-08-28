import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import React, { useRef } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";
import PharmacyItem from "../../components/cards/PharmacyItem";
import Header from "../../components/Header";
import pharmaciesNearby from "../../data/pharmaciesNearby";
import { RootTabScreenProps } from "../../types";

interface Props extends RootTabScreenProps<"PharmacyMap"> {}

const PharmacyMap: React.FC<Props> = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={{
          latitude: 8.228,
          longitude: 124.2452,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      />
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
            renderItem={({ item }) => <PharmacyItem type="store" {...item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
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