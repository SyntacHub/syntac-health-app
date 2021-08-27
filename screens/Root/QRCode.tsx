import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const QRCode = () => {
  const navigation = useNavigation<any>();

  return (
    <View>
      <Image source={require("../../assets/images/sample-qrcode.png")} />
      <Text>PURCHASE ID: eopfuivwa7stpyoyrtb8</Text>
      <Text>Congratulations!P{"\n"} QR Code Successfully Created.</Text>
      <Text>
        Screenshot this and present the QR code generated in the counter
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Dashboard")}>
        <Text>GO BACK TO DASHBOARD</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Medications")}>
        <Text>VIEW PURCHASE HISTORY</Text>
      </TouchableOpacity>
    </View>
  );
};

export default QRCode;

const styles = StyleSheet.create({});
