import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Beranda from "./screens/Beranda";
import Pesanan from "./screens/Pesanan";
import Pembatalan from "./screens/Pembatalan";
import Lainnya from "./screens/Lainnya";

import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
      }}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign name="home" size={24} color="blue" />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Pesanan"
        component={Pesanan}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign name="book" size={24} color="blue" />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Pembatalan"
        component={Pembatalan}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <MaterialIcons
                name="cancel-presentation"
                size={24}
                color="blue"
              />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Lainnya"
        component={Lainnya}
        options={{
          tabBarIcon: ({ focused }) => (
            <View>
              <AntDesign name="bars" size={24} color="blue" />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
