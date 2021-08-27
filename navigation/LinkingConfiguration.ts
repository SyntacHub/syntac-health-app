import { LinkingOptions } from "@react-navigation/native";
import * as Linking from "expo-linking";

import { RootStackParamList } from "../types";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Root: {
        initialRouteName: "Dashboard",
        screens: {
          Dashboard: {
            initialRouteName: "Home",
            screens: {
              Home: "home",
              Notification: "notification",
              Map: "map",
              Medications: "medications",
            },
          },
        },
      },
      Login: "login",
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
