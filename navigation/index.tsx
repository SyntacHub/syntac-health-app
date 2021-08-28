import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import Colors from "../constants/Colors";
import LoginScreen from "../screens/Auth/LoginScreen";
import ModalScreen from "../screens/ModalScreen";
import Dashboard from "../screens/Root/Dashboard";
import PharmacyMap from "../screens/Root/PharmacyMap";
import Medications from "../screens/Root/Medications";
import Notification from "../screens/Root/Notification";
import Product from "../screens/Root/Product";
import ProductMap from "../screens/Root/ProductMap";
import Profile from "../screens/Root/Profile";
import Purchase from "../screens/Root/Purchase";
import QRCode from "../screens/Root/QRCode";
import Search from "../screens/Root/Search";
import useAuth from "../store/useAuth";
import {
  BottomTabParamList,
  DrawerStackParamList,
  RootStackParamList,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import FirstAid from "../screens/Root/FirstAid";

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { isSignIn } = useAuth();
  return (
    <Stack.Navigator initialRouteName="Login">
      {isSignIn ? (
        <>
          <Stack.Screen
            name="Root"
            component={DrawerScreens}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Product"
            component={Product}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ProductMap"
            component={ProductMap}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Search"
            component={Search}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Purchase"
            component={Purchase}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="QRCode"
            component={QRCode}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FirstAid"
            component={FirstAid}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={{ headerShown: false }}
          />
          <Stack.Group screenOptions={{ presentation: "modal" }}>
            <Stack.Screen name="Modal" component={ModalScreen} />
          </Stack.Group>
        </>
      ) : (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator<DrawerStackParamList>();

const DrawerScreens: React.FC = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Dashboard" component={BottomTabScreens} />
      {/* <Drawer.Screen name="FaQs" component={Fragment} />
      <Drawer.Screen name="ContactUs" component={Fragment} />
      <Drawer.Screen name="PrivacyPolicy" component={Fragment} /> */}
    </Drawer.Navigator>
  );
};

type IBottomTab = {
  tabName: keyof BottomTabParamList;
  tabIcon: React.ComponentProps<typeof Feather>["name"];
  component: React.ComponentType<any>;
  name: string;
}[];

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

const BottomTabScreens: React.FC = () => {
  const bottomTabs: IBottomTab = [
    {
      tabName: "Home",
      tabIcon: "home",
      component: Dashboard,
      name: "Dashboard",
    },
    {
      tabName: "Notification",
      component: Notification,
      tabIcon: "bell",
      name: "Notification",
    },
    {
      tabName: "PharmacyMap",
      tabIcon: "map",
      component: PharmacyMap,
      name: "Pharmacy Map",
    },
    {
      tabName: "Medications",
      tabIcon: "heart",
      component: Medications,
      name: "Medications",
    },
  ];

  return (
    <BottomTab.Navigator
      initialRouteName={bottomTabs[0].tabName}
      screenOptions={{
        tabBarActiveTintColor: Colors.secondary,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 10,
          left: 20,
          right: 20,
          backgroundColor: Colors.bottomTabBackground,
          elevation: 0,
          height: 67,
          borderRadius: 18,
        },
        tabBarShowLabel: false,
      }}
    >
      {bottomTabs.map(({ tabName, name, component, tabIcon }, idx) => (
        <BottomTab.Screen
          key={idx}
          name={tabName}
          component={component}
          options={({ navigation }) => ({
            title: tabName,
            tabBarIcon: ({ color, focused }) => {
              return (
                <View style={{ alignItems: "center" }}>
                  <Feather
                    name={tabIcon}
                    size={24}
                    color={focused ? Colors.background : Colors.tabIconDefault}
                  />
                  <Text
                    style={{
                      fontFamily: "roboto-medium",
                      fontSize: 12,
                      color: focused
                        ? Colors.background
                        : Colors.tabIconDefault,
                    }}
                  >
                    {name}
                  </Text>
                </View>
              );
            },
          })}
        />
      ))}
    </BottomTab.Navigator>
  );
};
