import React, { useContext, useState, useEffect } from "react";
import styles from "../../BugOnStyles";
import { Text, View, Image, ScrollView } from "react-native";
import { ListProductContext } from "../../context/listProductContext";
import { btoa } from "react-native-quick-base64";
import { RadioButton, Button } from "react-native-paper";
import axios from "axios";

const ItemDetail = ({ route }) => {
  const { addProduct } = useContext(ListProductContext);
  const [size, setSize] = useState(`S`);
  const [sizeProduct, setSizeProduct] = useState([]);
  useEffect(() => {
    axios.get(`https://coffeebugon.onrender.com/sizeproduct`).then((res) => {
      setSizeProduct(res.data);
    });
  }, []);
  const add = (e) => {
    e.preventDefault();
    var id = route.params.id;
    var name = route.params.name + ` Size: (${size})`;
    var price = route.params.price;
    var amount = 1;
    var product = { id, name, price, amount };
    addProduct(product);
  };

  return (
    <ScrollView>
      {/* <Text>Ma: {route.params.id}</Text> */}
      <Image
        style={{
          width: "auto",
          height: 350,
          resizeMode: "center",
          borderBottomLeftRadius: 16,
          borderBottomRightRadius: 16,
          marginBottom: 16,
        }}
        source={{
          uri: `data:image/png;base64,${route.params.url}`,
        }}
      />
      <View style={{ paddingHorizontal: 16 }}>
        <Text style={styles.namePro}>{route.params.name}</Text>
        <Text style={styles.price}>{route.params.price}đ</Text>
        <View
          style={{
            display: "flex",
            // flexWrap: "wrap",
            flexDirection: "row",
            marginTop: 16,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16 }}>Kích thước</Text>
          <View style={{ flexDirection: "row" }}>
            {sizeProduct.map((item) => (
              // <TouchableOpacity key={item._id} onPress={() => setSize(item.name)}>
              //   <Text>{item.name}</Text>
              // </TouchableOpacity>
              // <RadioButton
              //   key={item._id}
              //   value={item.name}
              //   status={size === "S" ? "checked" : "unchecked"}
              //   onPress={() => setSize(item.name)}
              // >
              //   {item.name}
              // </RadioButton>
              <RadioButton.Group
                key={item._id}
                onValueChange={(size) => setSize(size)}
                value={size}
              >
                <RadioButton.Item
                  labelStyle={{
                    textAlign: "right",
                  }}
                  label={item.name}
                  value={item.name}
                />
              </RadioButton.Group>
            ))}
          </View>
        </View>
        <Button
          style={{ marginTop: 16 }}
          icon={"cart"}
          mode="contained"
          onPress={add}
        >
          Thêm giỏ vào hàng
        </Button>
      </View>
    </ScrollView>
  );
};

export default ItemDetail;
