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
import tw from "tailwind-react-native-classnames";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { addCart, removeCart, selectCart } from "../../../slices/navSlice";
import moment from "moment";

const OrdersList = ({ orders }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const calculateTotal = (orders) => {
    return orders.reduce((total, item) => total + item.price, 0);
  };

  const renderItem = ({ item }) => {
    const formattedDate = moment(item.createdAt.toDate().toUTCString()).format(
      "MMM Do YYYY, h:mm:ss a"
    );
    return (
      <TouchableOpacity
        style={tw`flex-row justify-between px-6 py-4`}
        onPress={() =>
          navigation.navigate("OrderItem", {
            name: item.restaurantName,
            orders: item.items,
          })
        }
      >
        <Text>{formattedDate}</Text>
        <Text style={tw`font-bold`}>${calculateTotal(item.items)}</Text>
      </TouchableOpacity>
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
        // showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default OrdersList;

const styles = StyleSheet.create({});
