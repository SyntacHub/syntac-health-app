import { AntDesign, Entypo, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Container from "../../components/Container";
import Colors from "../../constants/Colors";

const QRCode = () => {
  const navigation = useNavigation<any>();

  return (
    <Container style={styles.container} additionalPaddingTop={0}>
      <Image
        style={{
          width: "80%",
          height: undefined,
          aspectRatio: 1,
        }}
        source={require("../../assets/images/sample-qrcode.png")}
      />
      <Text
        style={{
          fontFamily: "inter-medium",
          fontSize: 14,
          textAlign: "center",
        }}
      >
        PURCHASE ID: eopfuivwa7stpyoyrtb8
      </Text>
      <Text
        style={{
          fontFamily: "inter-extrabold",
          fontSize: 28,
          textAlign: "center",
          marginVertical: 16,
        }}
      >
        Congratulations!{"\n"} QR Code Successfully Created.
      </Text>
      <Text
        style={{
          fontFamily: "inter-regular",
          color: Colors.primary,
          width: "80%",
          alignSelf: "center",
          textAlign: "center",
        }}
      >
        Screenshot this and present the QR code generated in the counter
      </Text>
      <View style={{ marginVertical: 16 }} />
      <TouchableOpacity
        style={[styles.mainButton, { backgroundColor: Colors.primary }]}
        onPress={() => navigation.navigate("Dashboard")}
      >
        <Text style={[styles.mainButtonText, { color: Colors.white }]}>
          Go to Dashboard
        </Text>
        <Feather name="home" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.mainButton, { backgroundColor: Colors.secondary }]}
        onPress={() => navigation.navigate("Profile")}
      >
        <Text style={[styles.mainButtonText, { color: Colors.primary }]}>
          View Purchase History
        </Text>
        <Entypo name="back-in-time" size={24} color={Colors.primary} />
      </TouchableOpacity>
    </Container>
  );
};

export default QRCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  mainButton: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    marginBottom: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainButtonText: {
    fontFamily: "inter-semibold",
  },
});
