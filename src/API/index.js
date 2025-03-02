import axios from "axios";

const instance = axios.create({
  baseURL: "http://react-native-food-delivery-be.eapi.joincoded.com/api",
});

export default instance;
