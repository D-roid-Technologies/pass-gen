import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabStack from "./stackscreens/BottomTabStack";

const AppEntryStack = createNativeStackNavigator();

const AppEntry: React.FC<any> = () => {
  return (
    <NavigationContainer>
      <AppEntryStack.Navigator initialRouteName="BottomTabStack">
        <AppEntryStack.Screen
          name="BottomTabStack"
          component={BottomTabStack}
          options={{ headerShown: false }}
        />
      </AppEntryStack.Navigator>
    </NavigationContainer>
  );
};

export default AppEntry;

const styles = StyleSheet.create({});
