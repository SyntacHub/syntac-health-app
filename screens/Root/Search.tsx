import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Container from "../../components/Container";
import SearchBarInput from "../../components/inputs/SearchBarInput";
import MedicationItem from "../../components/product/MedicationItem";
import Colors from "../../constants/Colors";
import medicines from "../../data/medicines";

const Search = () => {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const navigation = useNavigation<any>();
  const [text, setText] = useState("");

  return (
    <Container style={styles.container} background={Colors.white}>
      <SearchBarInput text={text} setText={setText} />
      {!!(text === "") && (
        <>
          <Text style={styles.label}>Search History</Text>
          <FlatList
            data={[
              "Paracetamol",
              "Ibuprofen",
              "Co-Amoxiclav",
              "Omerazole",
              "Loperamide",
            ]}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => setText(item)}
                style={{ flexDirection: "row" }}
              >
                <AntDesign name="rightsquareo" size={24} color="black" />
                <Text style={styles.item}>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(_, idx) => idx.toString()}
            ItemSeparatorComponent={() => (
              <View style={{ marginVertical: 8 }} />
            )}
          />
        </>
      )}
      {!(text === "") && (
        <>
          <Text style={styles.label}>Search Filters</Text>
          <FlatList
            style={{ flexGrow: 0, marginBottom: 16 }}
            data={["Outlet Brand", "Nearby Location", "Price", "Popular"]}
            renderItem={({ item }) => {
              const isActive = activeTags.some((x) => x === item);
              return (
                <TouchableOpacity
                  onPress={() => {
                    if (!isActive) {
                      setActiveTags((x) => [...x, item]);
                    } else {
                      setActiveTags((x) => {
                        let clone = [...x];
                        clone = clone.filter((x) => x !== item);
                        return clone;
                      });
                    }
                  }}
                  style={{
                    backgroundColor: isActive ? Colors.secondary : "#E9E9EC",
                    paddingHorizontal: 16,
                    paddingVertical: 4,
                    borderRadius: 16,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "inter-regular",
                      color: isActive ? Colors.primary : "#000",
                    }}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              );
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => (
              <View style={{ marginHorizontal: 4 }} />
            )}
            keyExtractor={(item) => item}
          />
          <FlatList
            data={medicines.filter((med) =>
              med.generic.toLowerCase().includes(text.toLowerCase())
            )}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Product", { id: item.id })}
              >
                <MedicationItem
                  productName={item.generic}
                  productDescription={item.desc}
                />
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
            ListEmptyComponent={() => (
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image source={require("../../assets/images/no-result.png")} />
                <Text
                  style={{
                    textAlign: "center",
                    fontFamily: "inter-regular",
                    color: "#aaa",
                    marginHorizontal: 10,
                  }}
                >
                  No Results found in your search. {"\n"}Check the spelling
                  properly or the item you’ve search is not in the database
                </Text>
              </View>
            )}
            ItemSeparatorComponent={() => (
              <View style={{ marginVertical: 8 }} />
            )}
          />
        </>
      )}
    </Container>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  label: {
    fontFamily: "inter-regular",
    fontSize: 16,
    color: "#8697A2",
    marginBottom: 16,
  },
  item: {
    marginLeft: 10,
    fontFamily: "inter-semibold",
    fontSize: 15,
  },
});
