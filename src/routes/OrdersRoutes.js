import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OrdersScreen from "../screens/OrdersScreen/OrdersScreen";
import OrderItem from "../screens/EatScreen/OrderItem";

const Stack = createStackNavigator();

function OrdersRoutes() {
  return (
    <Stack.Navigator initialRouteName="Orders">
      <Stack.Screen
        name="Orders"
        component={OrdersScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OrderItem"
        component={OrderItem}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default OrdersRoutes;
