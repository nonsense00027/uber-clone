import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NavigateCard from "../components/NavigateCard";
import RideOptionsCard from "../components/RideOptionsCard";

const Stack = createStackNavigator();

function MapRoutes() {
  return (
    <Stack.Navigator initialRouteName="Navigate">
      <Stack.Screen
        name="Navigate"
        component={NavigateCard}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Ride"
        component={RideOptionsCard}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MapRoutes;
