import React, { useEffect, useState } from "react";
import { Text, View, Dimensions,TouchableOpacity,FlatList } from "react-native";
import { Button, Card } from "react-native-paper";
import { btoa } from "react-native-quick-base64";
import styles from "../../BugOnStyles";
import axios from "axios";
import ProductItem from "../menu/productItem";
const NewProducts = ({ navigation }) => {
  const { width } = Dimensions.get("window");
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`https://coffeebugon.onrender.com/product`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <View>
      <Text
        style={{
          fontSize: 24,
          paddingTop: 16,
          paddingLeft: 16,
          fontWeight: "600",
          textTransform: "uppercase",
          color: "#444149",
        }}
      >
        Sản phẩm mới
      </Text>

      <View
        style={{
          paddingHorizontal: 16,
          marginTop: 16,
          flexDirection: "row",
          flexWrap: "wrap",
          // display: "flex",
          justifyContent: "space-between",
        }}
      >
        {product
          .filter((item, idx) => idx < 4)
          .sort((a, b) => b.createdAt - a.createdAt)
          .map((item) => (
            <TouchableOpacity key={item._id} onPress={() => {
              navigation.navigate("Chi tiết", {
                id: item._id,
                name: item.name,
                price: item.price,
                url: btoa(
                  new Uint8Array(item.image.data.data).reduce(function (
                    data,
                    byte
                  ) {
                    return data + String.fromCharCode(byte);
                  },
                  "")
                ),
              });
            }}>
              <Card
                key={item._id}
                mode="contained"
                style={{
                  width: width / 2 - 25,
                  marginBottom: 16,
                }}
              >
                <Card.Cover
                  resizeMode="center"
                  source={{
                    uri: `data:image/png;base64,${btoa(
                      new Uint8Array(item.image.data.data).reduce(function (
                        data,
                        byte
                      ) {
                        return data + String.fromCharCode(byte);
                      },
                      "")
                    )}`,
                  }}
                />
                <View style={{ padding: 16 }}>
                  <Text style={styles.namePro}>{item.name}</Text>
                  <Text style={styles.nameCategory}>
                    {item.categoryproductid.name}
                  </Text>
                  <Text style={styles.price}>{item.price} đ</Text>
                </View>
              </Card>
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

export default NewProducts;
