import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Colors from "../../constants/Colors";

const Voucher = () => {
  return (
    <View style={styles.voucherContainer}>
      <View style={styles.vourcherHeader}>
        <View style={styles.vourcherIconContainer}>
          <FontAwesome name="bell-o" size={18} color={Colors.primary} />
        </View>
        <View style={styles.vourcherSubHeader}>
          <Text style={styles.vourcherTitle}>₱15 off Min. Spend ₱200 </Text>
          <Text style={styles.vourcherPharmacy}>Mercury Drug</Text>
        </View>
      </View>
      <Text style={styles.vourcherDescription}>
        Purchase Any items from our pharmacy and get big discounts!
      </Text>
    </View>
  );
};

export default Voucher;

const styles = StyleSheet.create({
  voucherContainer: {
    backgroundColor: Colors.secondary,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 16,
  },
  vourcherHeader: {
    flexDirection: "row",
  },
  vourcherIconContainer: {
    backgroundColor: Colors.white,
    borderRadius: 50,
    height: 32,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  vourcherIcon: {},
  vourcherSubHeader: {
    marginLeft: 12,
  },
  vourcherTitle: {
    fontFamily: "inter-bold",
  },
  vourcherPharmacy: {
    fontFamily: "inter-regular",
  },
  vourcherDescription: {
    fontFamily: "inter-medium",
    marginTop: 8,
  },
});
