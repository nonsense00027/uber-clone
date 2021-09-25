import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";
import { TouchableOpacity } from "react-native-gesture-handler";

const IconComponent = ({ icon, type, title, color }) => {
  return (
    <View>
      <Icon
        name={icon}
        type={type}
        size={26}
        color={color ? "black" : "gray"}
      />
      <Text style={tw`mt-1 text-gray-700 text-sm`}>{title}</Text>
    </View>
  );
};
const BottomTabs = ({ color }) => {
  const navigation = useNavigation();

  return (
    <View
      style={tw`absolute bottom-8 left-0 right-0 w-full flex justify-center items-center`}
    >
      <View
        style={tw`flex-row justify-evenly bg-white bg-opacity-95 w-11/12 py-3 rounded-lg shadow-lg`}
      >
        {/* <Text>Hello world</Text> */}
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <IconComponent
            icon="home"
            type="font-awesome"
            title="Home"
            color={color === "Home"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Eat")}>
          <IconComponent
            icon="search"
            type="font-awesome"
            title="Browse"
            color={color === "Browse"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("OrdersScreen")}>
          <IconComponent
            icon="receipt"
            type="font-awesome-5"
            title="Orders"
            color={color === "Orders"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
