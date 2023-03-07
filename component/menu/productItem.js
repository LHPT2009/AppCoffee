import React, { useState, useEffect } from "react";
import styles from "../../BugOnStyles";
import { Text, View, Dimensions } from "react-native";
import { btoa } from "react-native-quick-base64";
import { Button, Card } from "react-native-paper";
import axios from "axios";

const ProductItem = (props) => {
  const { _id, name, price, image } = props.product; //destructuring an object
  const { onPress } = props;
  debugger;
  const { height, width } = Dimensions.get("window");

  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`https://coffeebugon.onrender.com/product`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [category, setCategory] = useState([]);
  useEffect(() => {
    axios
      .get(`https://coffeebugon.onrender.com/category`)
      .then((res) => {
        setCategory(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Card
      onPress={onPress}
      mode="contained"
      style={{
        width: "100%",
        marginBottom: 16,
      }}
    >
      <Card.Cover
        resizeMode="center"
        source={{
          uri: `data:image/png;base64,${btoa(
            new Uint8Array(image.data.data).reduce(function (data, byte) {
              return data + String.fromCharCode(byte);
            }, "")
          )}`,
        }}
      />
      <View style={{ padding: 16 }}>
        <Text style={styles.namePro}>{name}</Text>
        {/* <Text style={styles.nameCategory}>Cà phê Việt Nam</Text> */}
        <Text style={styles.price}>{price} đ</Text>
      </View>
    </Card>
  );
};
export default ProductItem;
