import { useNavigation, useRoute } from "@react-navigation/core";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Modal,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import FoodItems from "../../components/Eats/FoodItems";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
import { removeCart, selectCart } from "../../../slices/navSlice";
import { Button } from "react-native-elements";
import Cart from "../../components/Eats/Cart";
import { database } from "../../shared/configs/firebase";
import firebase from "firebase";
import LottieView from "lottie-react-native";

const data = [
  {
    id: "1",
    image:
      "https://i.ndtvimg.com/i/2015-05/restaurant-food_625x350_71431116318.jpg",
    title: "Lasagna",
    duration: "35-35 min",
    rating: 4.2,
  },
  {
    id: "2",
    image:
      "https://i.ndtvimg.com/i/2015-05/restaurant-food_625x350_71431116318.jpg",
    title: "Tandori Chicken",
    duration: "35-35 min",
    rating: 4.2,
  },
  {
    id: "3",
    image:
      "https://i.ndtvimg.com/i/2015-05/restaurant-food_625x350_71431116318.jpg",
    title: "Chilaquiles",
    duration: "35-35 min",
    rating: 4.2,
  },
  {
    id: "4",
    image:
      "https://i.ndtvimg.com/i/2015-05/restaurant-food_625x350_71431116318.jpg",
    title: "Chicken Sala",
    duration: "35-35 min",
    rating: 4.2,
  },
];

const Restaurant = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const cart = useSelector(selectCart);
  const dispatch = useDispatch();
  const { id, image_url, name, categories, price, rating, review_count } =
    route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const getStoreCart = () => {
    return cart.filter((item) => item.storeId === id);
  };

  const handleCheckout = () => {
    setLoading(true);
    database
      .collection("orders")
      .add({
        items: getStoreCart(),
        restaurantName: name,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((res) => {
        setTimeout(() => {
          setLoading(false);
          navigation.navigate("Success", {
            name: name,
            orders: getStoreCart(),
          });
        }, 2500);
        setModalVisible(false);
        getStoreCart().forEach((item) => {
          dispatch(removeCart(item));
        });
      });
  };
  return (
    <View style={tw`flex-1`}>
      {/* <Text>restaurant</Text> */}
      <Image
        style={{
          width: "100%",
          height: 250,
        }}
        resizeMode="cover"
        source={{ uri: image_url }}
      />
      <View style={tw`p-4 border-b border-gray-300 `}>
        <Text style={tw`text-2xl font-bold`}>{name}</Text>
        <View style={tw`flex-row my-1 flex-wrap`}>
          {categories.map((category) => (
            <Text key={category.title}>{category.title} | </Text>
          ))}
          {price && <Text>{price} | </Text>}
          <Text>{rating.toFixed(1)} ⭐ | </Text>
          <Text>({review_count}+)</Text>
        </View>
      </View>

      <FoodItems storeId={id} orders={data} showCheckbox={true} />
      {getStoreCart().length > 0 && (
        <View
          style={tw`absolute bottom-10 left-0 items-center justify-center w-full`}
        >
          <TouchableOpacity
            style={tw`flex-row items-center justify-center bg-black bg-opacity-90 w-8/12 py-3 rounded-full shadow-lg`}
            onPress={() => setModalVisible(true)}
          >
            <Icon name="shoppingcart" type="ant-design" color="white" />
            <Text style={tw`text-white font-semibold ml-2`}>
              ({getStoreCart().length}) View Cart
            </Text>
          </TouchableOpacity>
        </View>
      )}

      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={tw`flex-1 bg-black bg-opacity-40 justify-end`}>
          <View style={tw`h-4/6  bg-white rounded-t-3xl`}>
            {/* <View style={tw``}> */}
            <Text style={tw`text-center py-4 text-xl font-semibold`}>
              {name}
            </Text>
            <Cart orders={getStoreCart()} />
            <TouchableOpacity
              style={tw`bg-black px-4 py-3 rounded-full items-center w-60 self-center mt-4`}
              activeOpacity={0.4}
              onPress={handleCheckout}
            >
              <Text style={tw`text-white text-lg font-bold`}>Checkout</Text>
            </TouchableOpacity>
            {/* </View> */}
          </View>
        </View>
      </Modal>
      {loading && (
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
};

export default Restaurant;

const styles = StyleSheet.create({});
