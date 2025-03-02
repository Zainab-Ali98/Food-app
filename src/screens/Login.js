import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { login } from "../API/auth";
import UserContext from "../Context/UserContext";

// import ROUTES from "../../navigation";

const Login = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({});
  const { isAuth, setIsAuth } = useContext(UserContext);
  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: () => login(userInfo),
    onSuccess: () => {
      alert("Welcome");
      setIsAuth(true);
    },
    onError: (error) => {
      alert("Something went wrong");
      conssole.log(error);
    },
  });

  const handleLogin = () => {
    mutate();
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={userInfo.username}
          onChangeText={(value) =>
            setUserInfo({ ...userInfo, username: value })
          }
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={userInfo.password}
          onChangeText={(value) =>
            setUserInfo({ ...userInfo, password: value })
          }
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} />
        <Text style={styles.linkText}> Don't have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
            // navigation.navigate(ROUTES.AUTH.REGISTER);
          }}
        >
          <Text style={styles.linkTextBold}>Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6f7ff",
  },
  loginBox: {
    width: "80%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#F5F5F5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  linkText: {
    color: "#6F4E37",
    textAlign: "center",
    marginTop: 10,
  },
  linkTextBold: {
    color: "#4A3428",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 5,
  },
});
