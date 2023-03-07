import React from "react";
import { ScrollView, Image } from "react-native";
import { Dimensions } from "react-native";

const Panel = () => {
  const images = [
    {
      id: 1,
      source: "https://i.imgur.com/TZExxgM.png",
    },
    {
      id: 2,
      source: "https://i.imgur.com/Mr8A0h6.png",
    },
    {
      id: 3,
      source: "https://i.imgur.com/EoMTm4S.png",
    },
  ];
  return (
    <ScrollView
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={true}
      scrollIndicatorInsets={{ top: 10, left: 10, bottom: 10, right: 10 }} //ios
    >
      {images.map((item) => (
        <Image
          key={item.id}
          style={{ width: Dimensions.get("window").width, height: 200 }}
          source={{ uri: `${item.source}` }}
          resizeMode={"stretch"}
        />
      ))}
    </ScrollView>
  );
};

export default Panel;
