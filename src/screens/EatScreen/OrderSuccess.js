import { useNavigation, useRoute } from "@react-navigation/core";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import FoodItems from "../../components/Eats/FoodItems";
import LottieView from "lottie-react-native";
import { Icon } from "react-native-elements";

const OrderSuccess = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { name, orders } = route.params;
  const calculateTotal = () => {
    return orders.reduce((total, item) => total + item.price, 0);
  };
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <LottieView
        style={{
          height: 100,
          width: 100,
          alignSelf: "center",
          marginBottom: 20,
        }}
        source={require("../../assets/animations/check-mark.json")}
        autoPlay
        loop
        speed={0.5}
      />
      <View style={tw`justify-center items-center mb-4`}>
        <Text style={tw`font-bold text-2xl`}>Order Completed</Text>
        <Text style={tw``}>at {name}</Text>
      </View>
      <FoodItems
        orders={orders}
        showCheckbox={false}
        showLastComponent={false}
      />
      <View style={tw`mt-2`}>
        <Text style={tw`text-center text-3xl font-bold`}>
          <Text style={tw`font-normal text-lg`}>for</Text> $
          {calculateTotal().toFixed(2)}
        </Text>
      </View>
      <LottieView
        style={{
          height: 200,
          alignSelf: "center",
        }}
        source={require("../../assets/animations/cooking.json")}
        autoPlay
        loop
        speed={0.5}
      />
      <View
        style={tw`absolute bottom-10 w-full justify-center items-center mt-20`}
      >
        <TouchableOpacity
          style={tw`bg-black px-6 py-4 rounded-full flex-row items-center justify-center`}
          onPress={() => navigation.navigate("Eat")}
        >
          <Icon name="search" type="font-awesome" color="white" />
          <Text style={tw`text-white font-semibold ml-2`}>Browse again</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({});
