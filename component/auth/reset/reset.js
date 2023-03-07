import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
const Reset = () => {
  return (
    <View>
      <Text>Quên mật khẩu</Text>
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={number}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <TouchableOpacity>
        <Text>Gửi Mail</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Reset;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
