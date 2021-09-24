import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Main from "../Main";
import MapScreen from "../screens/MapScreen/MapScreen";
import EatScreen from "../screens/EatScreen/EatScreen";
import EatRoutes from "./EatRoutes";

const Stack = createStackNavigator();

function HomeRoutes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Main}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="EatScreen"
          component={EatRoutes}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomeRoutes;
