import { Feather } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import Colors from "../constants/Colors";
import LoginScreen from "../screens/Auth/LoginScreen";
import ModalScreen from "../screens/ModalScreen";
import Dashboard from "../screens/Root/Dashboard";
import Map from "../screens/Root/Map";
import Medications from "../screens/Root/Medications";
import Notification from "../screens/Root/Notification";
import useAuth from "../store/useAuth";
import { RootStackParamList, RootTabParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

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
            component={BottomTabNavigator}
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

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const bottomTabs: {
    tabName: keyof RootTabParamList;
    tabIcon: React.ComponentProps<typeof Feather>["name"];
    component: React.ComponentType<any>;
    name: string;
  }[] = [
    {
      tabName: "Dashboard",
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
      tabName: "Map",
      tabIcon: "map",
      component: Map,
      name: "Pharmancy Map",
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
        tabBarActiveTintColor: Colors.tint,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
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
}
