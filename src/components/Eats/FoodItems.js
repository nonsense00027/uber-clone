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

const FoodItems = ({ storeId, orders, showCheckbox, showLastComponent }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);

  const selectItem = (item, value) => {
    if (value) {
      dispatch(addCart({ ...item, storeId, id: `${storeId}${item.id}` }));
    } else {
      dispatch(removeCart({ ...item, storeId, id: `${storeId}${item.id}` }));
    }
  };

  const inCart = (id) => {
    const ids = cart.map((item) => item.id);
    return ids.includes(`${storeId}${id}`);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={tw`flex-row px-4 py-6`}>
        {showCheckbox && (
          <BouncyCheckbox
            iconStyle={{
              borderColor: "lightgray",
              borderRadius: 0,
            }}
            fillColor="green"
            onPress={(value) => selectItem(item, value)}
            isChecked={inCart(item.id)}
          />
        )}

        <View style={tw`flex-1 pl-4`}>
          <Text style={tw`font-semibold text-lg`}>{item.title}</Text>
          <Text style={tw`text-xs text-gray-600`}>
            with butter lettuce and tomato salad, with butter lettuce and tomato
            salad
          </Text>
          <Text>${item.price.toFixed(2)}</Text>
        </View>
        <Image
          source={{ uri: item.image }}
          resizeMode="cover"
          style={{
            height: 80,
            width: 80,
            borderRadius: 10,
          }}
        />
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
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default FoodItems;

const styles = StyleSheet.create({});
