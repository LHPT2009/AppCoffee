import React from "react";
import Ionic from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import styles from "./BugOnStyles";

import ListProductProvider from "./context/listProductContext";
import MainPage from "./component/mainPage/indexMenu";
import Menu from "./component/menu/indexMenu";
import General from "./component/general/indexMenu";
import Cart from "./component/cart/cart";

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <ListProductProvider>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size, color }) => {
              let iconName;
              if (route.name === "Trang chủ") {
                iconName = focused ? "home" : "home-outline";
                // size = focused ? size + 5 : size + 2;
              } else if (route.name === "Đặt hàng") {
                iconName = focused ? "fast-food" : "fast-food-outline";
                // size = focused ? size + 5 : size + 2;
              } else if (route.name === "Khác") {
                iconName = focused ? "person" : "person-outline";
                size = focused ? size - 2 : size - 2;
              } else if (route.name === "Giỏ hàng") {
                iconName = focused ? "cart" : "cart-outline";
                // size = focused ? size + 5 : size + 2;
              }
              return <Ionic name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "#444149",
            tabBarBadgeStyle: `#3D685E`,
            tabBarInactiveTintColor: "black",
            tabBarShowLabel: true,
            tabBarStyle: {
              paddingVertical: Platform.OS === "ios" ? 20 : 0,
              backgroundColor: "#E8DEF9",
              height: 70,
              paddingBottom: 8,
            },
            tabBarLabelStyle: { fontSize: 12, fontWeight: "400" },
          })}
        >
          <Tab.Screen
            name="Trang chủ"
            component={MainPage}
            options={{
              headerShown: false,
              headerTintColor: "#3D685E",
              headerStyle: { backgroundColor: "#EFF1F0" },
            }}
          />
          <Tab.Screen
            name="Đặt hàng"
            component={Menu}
            options={{
              headerShown: false,
              headerTintColor: "#3D685E",
              headerStyle: { backgroundColor: "#EFF1F0" },
            }}
          />
          <Tab.Screen
            name="Giỏ hàng"
            component={Cart}
            options={{
              headerShown: false,
              headerTintColor: "#3D685E",
              headerStyle: { backgroundColor: "#EFF1F0" },
            }}
          />
          <Tab.Screen
            name="Khác"
            component={General}
            options={{
              headerShown: false,
              headerTintColor: "#3D685E",
              headerStyle: { backgroundColor: "#EFF1F0" },
            }}
          />
        </Tab.Navigator>
      </ListProductProvider>
    </NavigationContainer>
  );
}

// import React from 'react';
// import Ionic from 'react-native-vector-icons/Ionicons';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
// import {NavigationContainer} from '@react-navigation/native'
// import React from "react";
// import Ionic from "react-native-vector-icons/Ionicons";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import { BottomNavigation, Text } from "react-native-paper";

// import ListProductProvider from './context/listProductContext';
// import MainPage from './component/mainPage/mainPage'
// import Menu from './component/menu/indexMenu'
// import General from './component/general/indexMenu'
// import Cart from './component/cart/cart'
// import ListProductProvider from "./context/listProductContext";
// import MainPage from "./component/mainPage/mainPage";
// import Menu from "./component/menu/indexMenu";
// import General from "./component/general/indexMenu";
// import Cart from "./component/cart/cart";

// export default function App() {
//   const Tab = createBottomTabNavigator();
//   return (
//     <NavigationContainer>
//       <ListProductProvider>
//         <Tab.Navigator
//           screenOptions={({ route }) => ({
//             tabBarIcon: ({ focused, size, color }) => {
//               let iconName;
//               if (route.name === "Trang chủ") {
//                 iconName = focused ? "ios-home" : "ios-home-outline";
//                 size = focused ? size + 10 : size + 3;
//               } else if (route.name === "Đặt hàng") {
//                 iconName = focused ? "cart" : "cart-outline";
//                 size = focused ? size + 10 : size + 3;
//               } else if (route.name === "Khác") {
//                 iconName = focused ? "menu" : "menu-outline";
//                 size = focused ? size + 10 : size + 3;
//               } else if (route.name === "Giỏ hàng") {
//                 iconName = focused ? "cart" : "cart-outline";
//                 size = focused ? size + 10 : size + 3;
//               }
//               return <Ionic name={iconName} size={size} color={color} />;
//             },
//             tabBarActiveTintColor: "#3D685E",
//             tabBarBadgeStyle: `#3D685E`,
//             tabBarInactiveTintColor: "black",
//             tabBarShowLabel: true,
//             tabBarStyle: {
//               paddingVertical: Platform.OS === "ios" ? 20 : 0,
//               backgroundColor: "#EFF1F0",
//               height: 60,
//             },
//           })}
//         >
//           <Tab.Screen
//             name="Trang chủ"
//             component={MainPage}
//             options={{
//               headerShown: true,
//               headerTintColor: "#3D685E",
//               headerStyle: { backgroundColor: "#EFF1F0" },
//             }}
//           />
//           <Tab.Screen
//             name="Đặt hàng"
//             component={Menu}
//             options={{
//               headerShown: false,
//               headerTintColor: "#3D685E",
//               headerStyle: { backgroundColor: "#EFF1F0" },
//             }}
//           />
//           <Tab.Screen
//             name="Khác"
//             component={General}
//             options={{
//               headerShown: false,
//               headerTintColor: "#3D685E",
//               headerStyle: { backgroundColor: "#EFF1F0" },
//             }}
//           />
//           <Tab.Screen
//             name="Giỏ hàng"
//             component={Cart}
//             options={{
//               headerShown: true,
//               headerTintColor: "#3D685E",
//               headerStyle: { backgroundColor: "#EFF1F0" },
//             }}
//           />
//         </Tab.Navigator>
//       </ListProductProvider>
//     </NavigationContainer>
//   );
// }

// import * as React from "react";
// import { BottomNavigation } from "react-native-paper";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { NavigationContainer } from "@react-navigation/native";

// import ListProductProvider from "./context/listProductContext";
// import MainPage from "./component/mainPage/mainPage";
// import Menu from "./component/menu/indexMenu";
// import Cart from "./component/cart/cart";
// import Other from "./component/general/general";

// const App = () => {
//   const [index, setIndex] = React.useState(0);
//   const [routes] = React.useState([
//     {
//       key: "home",
//       title: "Trang chủ",
//       focusedIcon: "home",
//       unfocusedIcon: "home-outline",
//     },
//     {
//       key: "menu",
//       title: "Thực đơn",
//       focusedIcon: "coffee",
//       unfocusedIcon: "coffee-outline",
//     },
//     {
//       key: "order",
//       title: "Giỏ hàng",
//       focusedIcon: "cart",
//       unfocusedIcon: "cart-outline",
//     },
//     {
//       key: "other",
//       title: "Khác",
//       focusedIcon: "menu",
//     },
//   ]);

//   const renderScene = BottomNavigation.SceneMap({
//     home: MainPage,
//     menu: Menu,
//     order: Cart,
//     other: Other,
//   });
//   return (
//     <SafeAreaProvider>
//       <NavigationContainer>
//         <ListProductProvider>
//           <BottomNavigation
//             navigationState={{ index, routes }}
//             onIndexChange={setIndex}
//             renderScene={renderScene}
//           />
//         </ListProductProvider>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// };

// export default App;
