import React from "react";
import { StyleSheet, Text, View, KeyboardAvoidingView } from "react-native";
import Login from "./screens/AuthScreen/Login";
import { useAuthContext } from "./shared/context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import HomeRoutes from "./routes/HomeRoutes";

const Wrapper = () => {
  const { user } = useAuthContext();
  return <>{user ? <HomeRoutes /> : <Login />}</>;
};

export default Wrapper;

const styles = StyleSheet.create({});
