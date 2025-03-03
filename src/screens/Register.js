import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import * as ImagePicker from "expo-image-picker";
import UserContext from "../Context/UserContext";
import { useMutation } from "@tanstack/react-query";
import { register } from "../API/auth";



const Register = () => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({});
  const [image, setImage] = useState("");
  const { isAuth, setIsAuth } = useContext(UserContext);

  const { mutate } = useMutation({
    mutationKey: ["register"],
    mutationFn: () => register(userInfo, image),
    onSuccess: () => {
      alert("Account created");
      setIsAuth(true);
    },
    onError: (error) => {
      alert("Error in creating account");
      console.log(error);
    },
  });

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleRegister = () => {
    mutate();
  };

  return (
    <View style={styles.container}>
      <View style={styles.registerBox}>
        <Text style={styles.title}>Register</Text>
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
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={userInfo.email}
          onChangeText={(value) => setUserInfo({ ...userInfo, email: value })}
        />
        <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
          <Text style={styles.imagePickerText}>Pick a Profile Picture</Text>
        </TouchableOpacity>
        {image && <Image source={{ uri: image }} style={styles.profileImage} />}
        <Button title="Register" onPress={handleRegister} />
        <Text style={styles.linkText}> Already have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.linkTextBold}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6f7ff",
  },
  registerBox: {
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
  imagePicker: {
    backgroundColor: "#6F4E37",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: "center",
  },
  imagePickerText: {
    color: "#fff",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
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
