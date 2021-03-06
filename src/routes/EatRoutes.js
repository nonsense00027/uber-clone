import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import EatScreen from "../screens/EatScreen/EatScreen";
import Restaurant from "../screens/EatScreen/Restaurant";
import OrderSuccess from "../screens/EatScreen/OrderSuccess";
import OrdersRoute from "./OrdersRoutes";

const Stack = createStackNavigator();

function EatRoutes() {
  return (
    <Stack.Navigator initialRouteName="Eat">
      <Stack.Screen
        name="Eat"
        component={EatScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Restaurant"
        component={Restaurant}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Success"
        component={OrderSuccess}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OrdersScreen"
        component={OrdersRoute}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default EatRoutes;
