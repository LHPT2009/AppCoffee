import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import {
  TextInput,
  Text,
  Button,
  Dialog,
  Provider,
  Portal,
  Paragraph,
} from "react-native-paper";
import axios from "axios";
import jwtDecode from "jwt-decode";

const Login = ({navigation}) => {
  const [show, setShow] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [visible, setVisible] = useState(false);
  const [success, setSuccess] = useState(true);
  const hideDialog = () => setVisible(false);

  const loginUser = async () => {
    const Auth = await axios
      .post(`https://coffeebugon.onrender.com/auth/login`, {
        username,
        password,
      })
      .catch((err) => {
        // alert("Bạn đã nhập sai tên đăng nhập hoặc mật khẩu. Vui lòng thử lại!");
        setSuccess(false);
        setVisible(true);
      });
    if (Auth.data.confirmemail == true) {
      // alert("Đăng nhập thành công!");
      setSuccess(true);
      setVisible(true);
      await AsyncStorage.setItem("token", Auth.data.accessToken);
      setUsername("");
      setPassword("");
      navigation.navigate("Tài khoản");
    } else {
      alert("Vui lòng xác thực tài khoản để đăng nhập.");
    }
  };

  return (
    <Provider>
      <View style={{ padding: 16 }}>
        <TextInput
          style={{ marginBottom: 8 }}
          mode="outlined"
          onChangeText={setUsername}
          value={username}
          label="Tên tài khoản"
        />
        <TextInput
          mode="outlined"
          onChangeText={setPassword}
          value={password}
          label="Mật khẩu"
          secureTextEntry={show}
          right={
            show === true ? (
              <TextInput.Icon icon="eye" onPress={() => setShow(false)} />
            ) : (
              <TextInput.Icon icon="eye-off" onPress={() => setShow(true)} />
            )
          }
        />
        <Button
          style={{ marginTop: 24, marginBottom: 12 }}
          mode="contained"
          onPress={() => loginUser()}
        >
          Đăng nhập
        </Button>

        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Title>Thông báo</Dialog.Title>
            <Dialog.Content>
              {success === true ? (
                <Paragraph>Đăng nhập thành công.</Paragraph>
              ) : (
                <Paragraph>
                  Sai tài khoản hoặc mật khẩu. Vui lòng thử lại.
                </Paragraph>
              )}
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog}>OK</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <Button style={{ marginBottom: 12 }} onPress={() => {navigation.navigate("Đăng ký");}}>
          Tạo tài khoản
        </Button>
        <Button onPress={() => {}}>Quên mật khẩu?</Button>
      </View>
    </Provider>
  );
};
export default Login;
