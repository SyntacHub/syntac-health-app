import React from "react";
import { ScrollView, StyleSheet, View, ViewStyle } from "react-native";

import { SafeAreaInsetsContext } from "react-native-safe-area-context";
import Colors from "../constants/Colors";

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
  additionalPaddingTop?: number;
  offInsetTop?: boolean;
  isScrollable?: boolean;
  background?: string;
};

const Container: React.FC<Props> = ({
  children,
  style,
  additionalPaddingTop = 16,
  isScrollable,
  offInsetTop,
  background = "white",
}) => {
  return (
    <SafeAreaInsetsContext.Consumer>
      {(insets) => {
        const topInset = offInsetTop ? 0 : insets?.top || 0;

        return (
          <View
            style={[
              {
                flex: 1,
                backgroundColor: background ?? Colors.white,
                paddingTop: topInset + additionalPaddingTop,
              },
            ]}
          >
            {isScrollable ? (
              <ScrollView
                contentContainerStyle={{ flexGrow: 1, paddingBottom: 110 }}
                style={[styles.layout, style]}
              >
                {children}
              </ScrollView>
            ) : (
              <View style={[styles.layout, style]}>{children}</View>
            )}
          </View>
        );
      }}
    </SafeAreaInsetsContext.Consumer>
  );
};

export default Container;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
});
