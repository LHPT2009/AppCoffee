import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import styles from "../../BugOnStyles";

import General from "../general/general";
import Profile from "../profile/profile";
import Purchase from "../purchase/purchase";
import Login from "../auth/login/login";
import Register from "../auth/register/register";
import Reset from "../auth/reset/reset";
import { Appbar } from "react-native-paper";

const CustomNavigationBar = ({ navigation, back }) => {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content titleStyle={styles.titleAppBar} title="Tài khoản" />
    </Appbar.Header>
  );
};

const IndexMenu = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Tài khoản"
      screenOptions={{ header: (props) => <CustomNavigationBar {...props} /> }}
    >
      <Stack.Screen
        name="Tài khoản"
        component={General}
        options={{
          headerShown: true,
          headerTintColor: "#3D685E",
          headerStyle: { backgroundColor: "#EFF1F0" },
        }}
      />
      <Stack.Screen
        name="Thông tin tài khoản"
        component={Profile}
        options={{
          headerShown: true,
          headerTintColor: "#3D685E",
          headerStyle: { backgroundColor: "#EFF1F0" },
        }}
      />
      <Stack.Screen
        name="Đơn hàng đã đặt"
        component={Purchase}
        options={{
          headerShown: true,
          headerTintColor: "#3D685E",
          headerStyle: { backgroundColor: "#EFF1F0" },
        }}
      />
      <Stack.Screen
        name="Đăng nhập"
        component={Login}
        options={{
          headerShown: true,
          headerTintColor: "#3D685E",
          headerStyle: { backgroundColor: "#EFF1F0" },
        }}
      />
      <Stack.Screen
        name="Đăng ký"
        component={Register}
        options={{
          headerShown: true,
          headerTintColor: "#3D685E",
          headerStyle: { backgroundColor: "#EFF1F0" },
        }}
      />
      <Stack.Screen
        name="Quên mật khẩu"
        component={Reset}
        options={{
          headerShown: true,
          headerTintColor: "#3D685E",
          headerStyle: { backgroundColor: "#EFF1F0" },
        }}
      />
    </Stack.Navigator>
  );
};

export default IndexMenu;
