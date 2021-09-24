import React from "react";
import { StyleSheet, Text, View } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

const IconComponent = ({ icon, type, title }) => {
  return (
    <View>
      <Icon name={icon} type={type} size={26} />
      <Text style={tw`mt-1 text-gray-700 text-sm`}>{title}</Text>
    </View>
  );
};
const BottomTabs = () => {
  return (
    <View
      style={tw`absolute bottom-5 left-0 right-0 w-full flex justify-center items-center`}
    >
      <View
        style={tw`flex-row justify-evenly bg-white bg-opacity-95 w-11/12 py-3 rounded-lg shadow-lg`}
      >
        {/* <Text>Hello world</Text> */}
        <IconComponent icon="home" type="font-awesome" title="Home" />
        <IconComponent icon="search" type="font-awesome" title="Browse" />
        <IconComponent icon="receipt" type="font-awesome-5" title="Orders" />
      </View>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
