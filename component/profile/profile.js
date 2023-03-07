import React from "react";
import { View, Text } from "react-native";
const Profile = ({ route }) => {
  return (
    <View>
      <Text>Thông tin cá nhân của {route.params.name}</Text>
    </View>
  );
};
export default Profile;
