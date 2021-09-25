import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import OrdersList from "../../components/Eats/OrdersList";
import { database } from "../../shared/configs/firebase";
import { useAuthContext } from "../../shared/context/AuthContext";
import { collectIdsAndDocs } from "../../shared/utilities";
import tw from "tailwind-react-native-classnames";
import BottomTabs from "../../components/Eats/BottomTabs";
import LottieView from "lottie-react-native";

const OrdersScreen = () => {
  const { user } = useAuthContext();
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const unsubscribe = database.collection("orders").onSnapshot((snapshot) => {
      const result = snapshot.docs.map((doc) => collectIdsAndDocs(doc));
      setOrders(result.filter((item) => item.user === user.uid));
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <View style={{ flex: 1, position: "relative" }}>
      {/* <View style={tw`bg-black justify-center items-center py-4`}> */}
      <SafeAreaView>
        <Text style={tw`text-center font-bold text-xl mb-4`}>Your Orders</Text>
      </SafeAreaView>
      {/* </View> */}
      <OrdersList orders={orders} />
      <BottomTabs color="Orders" />
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

export default OrdersScreen;

const styles = StyleSheet.create({});
