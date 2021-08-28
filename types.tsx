import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<DrawerStackParamList>;
  Product: { id: number };
  ProductMap: undefined;
  Search: undefined;
  Purchase: { id: number };
  QRCode: { id: number };
  FirstAid: undefined;
  Profile: undefined;
  Login: undefined;
  Modal: undefined;
  NotFound: undefined;
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type DrawerStackParamList = {
  Dashboard: NavigatorScreenParams<BottomTabParamList>;
  FaQs: undefined;
  ContactUs: undefined;
  PrivacyPolicy: undefined;
};

export type DrawerStackScreenProps<Screen extends keyof DrawerStackParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<DrawerStackParamList, Screen>,
    NativeStackScreenProps<BottomTabParamList>
  >;

export type BottomTabParamList = {
  Home: undefined;
  Notification: undefined;
  PharmacyMap: undefined;
  Medications: undefined;
};

export type RootTabScreenProps<Screen extends keyof BottomTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;
