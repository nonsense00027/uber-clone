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

const data = [
  {
    id: "1",
    image:
      "https://i.ndtvimg.com/i/2015-05/restaurant-food_625x350_71431116318.jpg",
    title: "Farmhouse Kitchen Thai Cuisine",
    duration: "35-35 min",
    rating: 4.2,
  },
];
const Restaurants = ({ restaurants }) => {
  console.log("RESTAURANTS", restaurants[0]);
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={tw`p-3 bg-white my-1`}
        activeOpacity={0.5}
        onPress={() => navigation.navigate("Restaurant", item)}
      >
        <Image
          style={{
            height: 220,
            width: "100%",
          }}
          //   resizeMethod="cover"
          resizeMode="cover"
          source={{ uri: item.image_url }}
        />
        <View style={tw`flex-row items-center mt-2`}>
          <View style={tw`flex-grow`}>
            <Text style={tw`text-lg font-semibold`}>{item.name}</Text>
            <Text style={tw`text-gray-600`}>30-45 min</Text>
          </View>
          <View
            style={tw`bg-gray-200 items-center justify-center h-10 w-10 rounded-full`}
          >
            <Text>{item.rating.toFixed(1)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ width: 5 }}></View>}
        // horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({});
