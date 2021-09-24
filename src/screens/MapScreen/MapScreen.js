import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import Map from "../../components/Map";
import MapRoutes from "../../routes/MapRoutes";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";

export default function MapScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={tw`bg-gray-100 absolute top-16 left-6 shadow-lg z-50 p-3 rounded-full`}
        onPress={() => navigation.navigate("Home")}
      >
        <Icon name="menu" />
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <MapRoutes />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
