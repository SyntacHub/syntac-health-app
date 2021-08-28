import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Colors from "../constants/Colors";

interface Props {
  showBackButton?: boolean;
  iconColor?: keyof typeof Colors;
  rightButton?: any;
}

const Header: React.FC<Props> = ({
  showBackButton = true,
  iconColor = "white",
  rightButton,
}) => {
  const navigation = useNavigation();

  let leftButton;

  if (showBackButton) {
    leftButton = (
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Feather name="arrow-left" size={24} color={Colors[iconColor]} />
      </TouchableOpacity>
    );
  }

  return (
    <View style={[styles.container]}>
      {leftButton}
      <View style={styles.middleContainer} />
      <View style={styles.leftContainer}>{rightButton}</View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftContainer: {
    flex: 0.1,
    height: 64,
    justifyContent: "center",
  },
  middleContainer: {
    flex: 0.8,
    justifyContent: "center",
  },
  rightContainer: {
    flex: 0.1,
    height: 64,
    justifyContent: "center",
  },
});
