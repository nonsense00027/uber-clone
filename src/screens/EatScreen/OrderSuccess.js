import { useRoute } from "@react-navigation/core";
import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import FoodItems from "../../components/Eats/FoodItems";
import LottieView from "lottie-react-native";

const OrderSuccess = () => {
  const route = useRoute();
  const { name, orders } = route.params;
  console.log(orders);
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
    </SafeAreaView>
  );
};

export default OrderSuccess;

const styles = StyleSheet.create({});
