import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";
import useAuth from "../../store/useAuth";
import { RootStackScreenProps } from "../../types";

interface Props extends RootStackScreenProps<"Login"> {}

const LoginScreen: React.FC<Props> = () => {
  const { signIn } = useAuth();

  return (
    <View style={styles.container}>
      <Image
        style={styles.loginImage}
        source={require("../../assets/images/login/0.png")}
        resizeMode="cover"
      />
      <Text style={styles.title}>NearPharma</Text>
      <Text style={styles.description0}>Search for Medicine Supplies</Text>
      <Text style={styles.description1}>Seamlessly & Intuitively</Text>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.facebookButton} onPress={signIn}>
          <FontAwesome5 name="facebook" size={18} color={Colors.white} />
          <Text style={styles.facebookText}>Continue with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.googleButton} onPress={signIn}>
          <FontAwesome5 name="google" size={18} color={`#262626`} />
          <Text style={styles.googleText}>Continue with Google</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.footer}>
        Syntac Organization{"\n"}© 2021 All Rights Reserved
      </Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  loginImage: {
    marginHorizontal: "auto",
    marginVertical: 36,
  },
  title: {
    fontFamily: "rubik-bold",
    fontSize: 32,
    color: Colors.white,
    textAlign: "center",
    marginBottom: 16,
  },
  description0: {
    fontFamily: "poppins-regular",
    fontSize: 14,
    color: Colors.white,
    textAlign: "center",
  },
  description1: {
    fontFamily: "poppins-semibold",
    fontSize: 18,
    color: Colors.white,
    textAlign: "center",
  },
  buttonsContainer: {
    marginTop: "auto",
  },
  facebookButton: {
    backgroundColor: Colors.facebook,
    paddingVertical: 12,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    justifyContent: "center",
  },
  facebookText: {
    color: Colors.white,
    fontFamily: "poppins-regular",
    marginLeft: 8,
  },
  googleButton: {
    backgroundColor: Colors.white,
    paddingVertical: 12,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    justifyContent: "center",
  },
  googleText: {
    color: "#757575",
    fontFamily: "poppins-regular",
    marginLeft: 8,
  },
  footer: {
    marginTop: 24,
    fontFamily: "poppins-semibold",
    fontSize: 12,
    textAlign: "center",
    color: "#eee",
    lineHeight: 22,
  },
});
