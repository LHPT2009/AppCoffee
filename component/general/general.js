import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";
import { View } from "react-native";
import jwtDecode from "jwt-decode";
import { List } from "react-native-paper";

const General = ({ navigation }) => {
  var token;
  const InputData = async () => {
    token = await AsyncStorage.getItem("token");
    // console.log(token);
  };
  const logout = () => {
    AsyncStorage.clear();
    alert("Đăng xuất thành công");
    navigation.navigate("Đăng nhập");
  };
  useEffect(() => {
    InputData();
  }, []);

  return (
    <View>
      <List.Item
        title="Đăng nhập"
        left={(props) => <List.Icon {...props} icon="account" />}
        onPress={() => {
          navigation.navigate("Đăng nhập");
        }}
      />

      <List.Item
        title="Đăng xuất"
        left={(props) => <List.Icon {...props} icon="logout" />}
        onPress={() => logout()}
      />
    </View>
  );
};

export default General;
