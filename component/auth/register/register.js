import React, { useState } from "react";
import { View } from "react-native";
import { TextInput, Button } from "react-native-paper";
import axios from "axios";
const Register = ({ navigation }) => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [role, setRole] = useState("6335369ee1caa255ab840cd4");

  const [show, setShow] = useState(true);

  const addUser = () => {
    if (password == rePassword) {
      axios
        .post(`https://coffeebugon.onrender.com/auth/register`, {
          firstname,
          lastname,
          username,
          email,
          password,
          role,
        })
        .then(function (response) {
          alert("Mời bạn xác nhận Email trước khi đăng nhập");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert("Mật khẩu xác nhận không trùng khớp.");
    }
  };

  return (
    <View style={{ padding: 16 }}>
      <TextInput
        style={{ marginBottom: 8 }}
        mode="outlined"
        onChangeText={setLastName}
        value={lastname}
        label="Họ"
      />
      <TextInput
        style={{ marginBottom: 8 }}
        mode="outlined"
        onChangeText={setFirstName}
        value={firstname}
        label="Tên"
      />
      <TextInput
        style={{ marginBottom: 8 }}
        mode="outlined"
        onChangeText={setUsername}
        value={username}
        label="Tài khoản"
      />
      <TextInput
        style={{ marginBottom: 8 }}
        mode="outlined"
        onChangeText={setEmail}
        value={email}
        label="Email"
      />
      <TextInput
        style={{ marginBottom: 8 }}
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
      <TextInput
        mode="outlined"
        onChangeText={setRePassword}
        value={rePassword}
        label="Xác nhận mật khẩu"
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
        onPress={() => {
          addUser();
          navigation.navigate("Đăng nhập");
        }}
      >
        Tạo tài khoản
      </Button>

      <Button
        style={{ marginBottom: 12 }}
        onPress={() => {
          navigation.navigate("Đăng nhập");
        }}
      >
        Đăng nhập
      </Button>
    </View>
  );
};
export default Register;
