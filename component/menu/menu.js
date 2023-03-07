import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import ProductItem from "./productItem";
import axios from "axios";
import { btoa } from "react-native-quick-base64";
import { Chip } from "react-native-paper";

const Menu = ({ navigation }) => {
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

  // const [select, setSelect] = useState(false);
  const [selectName, setSelectName] = useState('');
  const cateList = category.map((item) => {
    return (
      <Chip
        // selected={select}
        key={item._id}
        style={{
          marginBottom: 8,
          fontWeight: "200",
          marginRight: 6,
        }}
        mode="flat"
        onPress={() => {
          // setSelect(!select);
          setSelectName(item.name)
        }}
      >
        {item.name}
      </Chip>
    );
  });
  var listproducts = selectName === '' ? (product): (product.filter((item) => item.categoryproductid.name == selectName))
  return (
    <View style={{ padding: 16, marginBottom: 75 }}>
      <View style={{ flexWrap: "wrap", flexDirection: "row" }}>
      <Chip
        key={0}
        style={{
          marginBottom: 8,
          fontWeight: "200",
          marginRight: 6,
        }}
        mode="flat"
        onPress={() => {
          setSelectName('')
        }}
      >
        Tất cả
      </Chip>
      {cateList}
      </View>
      <View style={{ marginBottom: 8 }} />
      {
        <FlatList
          data={listproducts}
          renderItem={({ item }) => (
            <ProductItem
              onPress={() => {
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
              }}
              product={item}
              key={item.name}
            />
          )}
          keyExtractor={(eachProduct) => eachProduct.name}
        />
      }
    </View>
  );
};

export default Menu;
