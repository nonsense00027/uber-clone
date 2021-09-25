import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Provider } from "react-redux";
import HomeRoutes from "./src/routes/HomeRoutes";
import { store } from "./store";
import Login from "./src/screens/AuthScreen/Login";
import { AuthProvider } from "./src/shared/context/AuthContext";
import Wrapper from "./src/Wrapper";

export default function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
          style={{ flex: 1 }}
        >
          {/* <HomeRoutes /> */}
          <Wrapper />
        </KeyboardAvoidingView>
      </Provider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
