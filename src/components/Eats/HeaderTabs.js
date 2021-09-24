import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";

const HeaderButton = ({ title, activeTab, setActiveTab }) => {
  return (
    <TouchableOpacity
      style={tw`px-6 py-3 rounded-full ${
        activeTab === title ? "bg-black" : "bg-white"
      }`}
      onPress={() => setActiveTab(title)}
    >
      <Text
        style={tw`font-bold ${
          activeTab === title ? "text-white" : "text-black"
        }`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
const HeaderTabs = ({ activeTab, setActiveTab }) => {
  return (
    <View
      style={tw`flex-row justify-center bg-red-200 self-center rounded-full bg-white`}
    >
      <HeaderButton
        title="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        title="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({});
