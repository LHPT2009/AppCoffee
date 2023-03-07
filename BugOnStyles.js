"use strict";
import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
  colorGrey: {
    color: "#444149",
  },
  colorPurple: {
    color: "#E8DEF9",
  },
  colorAppBar: { color: "#D3D0D3" },
  titleAppBar: {
    fontWeight: "700",
    color: "#444149",
  },
  namePro: { fontSize: 22, fontWeight: "600", marginBottom: 2 },
  nameProCart: {
    fontSize: 22,
    fontWeight: "600",
    marginLeft: 8,
  },
  nameCategory: { fontSize: 14, fontWeight: "200", marginBottom: 12 },
  price: { fontSize: 18, fontWeight: "500", letterSpacing: 0.5 },
  priceCart: {
    fontSize: 18,
    fontWeight: "500",
    marginLeft: 8,
    letterSpacing: 0.5,
  },
  thumbContainer: {
    width: "100%",
    height: 400,
  },
  thumbnail: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: "center",
  },
});
