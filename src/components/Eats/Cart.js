import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import { useSelector } from "react-redux";
import tw from "tailwind-react-native-classnames";
import { selectCart } from "../../../slices/navSlice";

const Cart = ({ orders }) => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <View style={tw`px-8 py-4 flex-row justify-between`}>
        <Text>{item.title}</Text>
        <Text>$23.4</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: "lightgray" }}></View>
        )}
        // horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
      <View
        style={tw`px-8 py-4 flex-row justify-between border-gray-300 border-t`}
      >
        <Text style={tw`font-semibold text-lg`}>Subtotal</Text>
        <Text style={tw`text-lg font-bold`}>$23.4</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({});
