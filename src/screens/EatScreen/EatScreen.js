import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import HeaderTabs from "../../components/Eats/HeaderTabs";
import tw from "tailwind-react-native-classnames";
import { useSelector } from "react-redux";
import { selectOrigin } from "../../../slices/navSlice";
import { Icon } from "react-native-elements";
import Categories from "../../components/Eats/Categories";
import Restaurants from "../../components/Eats/Restaurants";
import { YELP_APIKEY } from "@env";
import BottomTabs from "../../components/Eats/BottomTabs";
import LottieView from "lottie-react-native";

export default function EatScreen() {
  const [activeTab, setActiveTab] = useState("Delivery");
  const origin = useSelector(selectOrigin);

  const location = origin?.description.split(",")[0];
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurantsYelp = () => {
    const yelpURL = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${location}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_APIKEY}`,
      },
    };

    return fetch(yelpURL, apiOptions)
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data.businesses);
      });
  };

  useEffect(() => {
    getRestaurantsYelp();
  }, [origin]);

  const getRestaurants = () => {
    return restaurants.filter((item) =>
      item.transactions.includes(activeTab.toLowerCase())
    );
  };

  return (
    <View style={tw`flex-1`}>
      <SafeAreaView>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      </SafeAreaView>
      <View style={tw`flex flex-row items-center justify-center py-4`}>
        <Icon name="location" type="ionicon" size={24} />
        <Text style={tw`font-semibold ml-1`}>{origin?.description}</Text>
      </View>
      <Categories />
      <Restaurants restaurants={getRestaurants()} />
      <BottomTabs color="Browse" />
      {restaurants.length < 1 && (
        <View
          style={{
            backgroundColor: "black",
            opacity: 0.5,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
          <LottieView
            style={{
              height: 200,
            }}
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            loop
            speed={5}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
