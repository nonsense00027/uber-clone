import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";

const data = [
  {
    id: "1",
    icon: "shopping-bag",
    type: "entypo",
    title: "Pickup",
  },
  {
    id: "2",
    icon: "wine-bottle",
    type: "font-awesome-5",
    title: "Soft Drinks",
  },
  {
    id: "3",
    icon: "bread-slice",
    type: "material-community",
    title: "Bakery Items",
  },
  {
    id: "4",
    icon: "fast-food",
    type: "ionicon",
    title: "Fast Food",
  },
];
const Categories = () => {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={tw`flex-row items-center bg-gray-300 rounded-full px-4 py-2`}
        activeOpacity={0.4}
      >
        <Icon
          name={item.icon}
          type={item.type}
          //   color="white"
          size={20}
        />
        <View>
          <Text style={tw`ml-1`}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={tw`mb-4`}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ width: 5 }}></View>}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({});
