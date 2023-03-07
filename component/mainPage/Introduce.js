import { View, Text, Image } from "react-native";
import React from "react";
import styles from "../../BugOnStyles";
import NewProducts from "./NewProducts";

const Introduce = () => {
  return (
    <View
      style={{
        padding: 16,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          fontWeight: "600",
          textTransform: "uppercase",
          color: "#444149",
          marginBottom: 16,
        }}
      >
        Giới thiệu
      </Text>
      <View>
        <Image
          style={{
            width: "100%",
            height: 100,
            resizeMode: "contain",
            marginBottom: 4,
            // overflow: "visible",
          }}
          source={{
            uri: `https://file.hstatic.net/1000075078/file/cloudtea_tagline_1_c39d8fd0d46b4144be9cebd05e318796.png`,
          }}
        />
        <Image
          style={{
            width: "100%",
            height: 400,
            resizeMode: "contain",
            // overflow: "visible",
          }}
          source={{
            uri: `https://file.hstatic.net/1000075078/file/cloudtea_1_5dc49fd17ba04030993d2f797dc570f2.png`,
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: "200",
            textAlign: "justify",
            marginTop: 12,
            lineHeight: 20,
            marginBottom: 60,
          }}
        >
          Vừa êm mượt dịu dàng, vừa bùng nổ nồng nàn, Trà Sữa CloudTea Hương Vị
          Nụ Hôn Đầu mang đến trải nghiệm đầy mới mẻ. Chạm môi là bồng bềnh,
          càng thêm đậm đà nhờ topping vụn bánh quy phô mai hoặc bột ca cao thơm
          lừng.
        </Text>
      </View>
    </View>
  );
};

export default Introduce;
