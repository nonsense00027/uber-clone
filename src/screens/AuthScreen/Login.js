import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { useAuthContext } from "../../shared/context/AuthContext";
import { auth, googleProvider } from "../../shared/configs/firebase";
import { Button } from "react-native-elements";
import LottieView from "lottie-react-native";

const Login = () => {
  const { user, login, authLoading } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <View style={tw`flex-1 relative justify-center`}>
      <View style={tw`px-6`}>
        <View style={tw`justify-center items-center`}>
          <Image
            style={{ width: 150, height: 150 }}
            resizeMode="contain"
            source={{ uri: "https://links.papareact.com/gzs" }}
          />
        </View>
        {/* <Text style={tw`text-center text-lg`}>Please login</Text> */}

        <Text style={tw`mt-4`}>Email</Text>
        <TextInput
          style={tw`border border-gray-200 p-4 rounded-md`}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text style={tw`mt-4`}>Password</Text>
        <TextInput
          style={tw`border border-gray-200 p-4 rounded-md`}
          value={password}
          onChangeText={(text) => setPassword(text)}
          textContentType="password"
          secureTextEntry={true}
        />
        <Button
          buttonStyle={{
            backgroundColor: "black",
            paddingVertical: 10,
            marginTop: 10,
          }}
          title="Login"
          onPress={handleLogin}
        />
        <TouchableOpacity
          style={tw`flex-row items-center justify-center border border-gray-200 rounded-md py-1 mt-10`}
        >
          <Image
            style={{
              width: 35,
              height: 35,
              marginRight: 5,
            }}
            source={{
              uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-icon-png-transparent-background-osteopathy-16.png",
            }}
          />
          <Text style={tw`font-semibold`}>Sign in with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex-row items-center justify-center border border-gray-200 rounded-md py-1 mt-2`}
        >
          <Image
            style={{
              width: 33,
              height: 33,
              marginRight: 5,
            }}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png",
            }}
          />
          <Text style={tw`font-semibold`}>Sign in with Facebook</Text>
        </TouchableOpacity>
      </View>
      {authLoading && (
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

export default Login;

const styles = StyleSheet.create({});
