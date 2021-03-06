import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./src/screens/mainscreen/MainScreen";
import SettingScreen from "./src/screens/settingscreen/SettingScreen";
import { Provider as PaperProvider } from "react-native-paper";
import { SettingsProvider } from "./src/context/SettingsContext";
import { AntDesign } from "@expo/vector-icons";
import MainTheme, { loadFonts } from "./src/themes/MainTheme";

const BottomTabNavigator = createBottomTabNavigator();

const SettingsStack = createStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="Settings"
        component={SettingScreen}
        options={{
          headerStyle: {
            backgroundColor: "#CC2B25",
          },
          headerTintColor: "white",
        }}
      />
    </SettingsStack.Navigator>
  );
}

function Tabs() {
  return (
    <NavigationContainer>
      <BottomTabNavigator.Navigator
        tabBarOptions={{
          keyboardHidesTabBar: true,
          showLabel: false,
          style: { backgroundColor: "rgba(0, 0, 0, 1)" },
          activeTintColor: "#CC2B25",
        }}
      >
        <BottomTabNavigator.Screen
          name="home"
          component={MainScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ size, color }) => {
              return <AntDesign name="home" size={size} color={color} />;
            },
          }}
        />
        <BottomTabNavigator.Screen
          name="Settings"
          component={SettingsStackScreen}
          options={{
            tabBarIcon: ({ size, color }) => {
              return <AntDesign name="setting" size={size} color={color} />;
            },
          }}
        />
      </BottomTabNavigator.Navigator>
    </NavigationContainer>
  );
}

export default function App() {
  // Load custom fonts into main theme.
  const theme = { ...MainTheme, fonts: loadFonts() };
  return (
    <SettingsProvider>
      <PaperProvider theme={theme}>
        <Tabs />
      </PaperProvider>
    </SettingsProvider>
  );
}
