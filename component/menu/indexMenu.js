import React from "react";
import styles from "../../BugOnStyles";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Appbar, Chip } from "react-native-paper";
import Menu from "./menu";
import ItemDetail from "../itemDetail/itemDetail";

const CustomNavigationBar = ({ navigation, back }) => {
  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content titleStyle={styles.titleAppBar} title="Thực đơn" />
      {/* <Appbar.Action icon={"filter"} /> */}
    </Appbar.Header>
  );
};

const IndexMenu = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Thực đơn"
      screenOptions={{ header: (props) => <CustomNavigationBar {...props} /> }}
    >
      <Stack.Screen name="Thực đơn" component={Menu} />
      <Stack.Screen name="Chi tiết" component={ItemDetail} />
    </Stack.Navigator>
  );
};

export default IndexMenu;
