import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/core";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../../slices/navSlice";

const SURGE_CHARGE_RATE = 1.5;
const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-X-456",
    title: "UberXL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-X-789",
    title: "UberLUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style={tw`flex-row items-center justify-between px-6 ${
          selected?.id === item.id && "bg-gray-200"
        }`}
        onPress={() => setSelected(item)}
      >
        <Image
          style={{
            width: 80,
            height: 80,
            resizeMode: "contain",
          }}
          source={{ uri: item.image }}
        />
        <View style={tw`flex-1`}>
          <Text style={tw`text-xl font-semibold`}>{item.title}</Text>
          <Text style={tw`text-gray-700`}>
            {travelTimeInformation?.duration?.text} travel time
          </Text>
        </View>
        <View style={tw`pl-4`}>
          <Text style={tw`text-lg font-semibold`}>
            {new Intl.NumberFormat("en-ph", {
              style: "currency",
              currency: "PHP",
            }).format(
              (travelTimeInformation?.duration.value *
                SURGE_CHARGE_RATE *
                item.multiplier) /
                100
            )}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity
          style={tw`absolute top-3 left-5 p-3 rounded-full z-50`}
          onPress={() => navigation.navigate("Navigate")}
        >
          <Icon name="chevron-left" type="font-awesome" />
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Select a Ride - {travelTimeInformation?.distance?.text}
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity
          disabled={!selected}
          style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-200"}`}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Choose {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
