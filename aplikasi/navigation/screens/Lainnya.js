import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { AntDesign } from "@expo/vector-icons";

const Pembatalan = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.headerText}>Menu</Text>
      </View>

      <View style={styles.box2}>
        <View style={{ flexDirection: "row" }}>
          <AntDesign name="search1" size={60} style={styles.menuIcon} />
          <AntDesign name="user" size={60} style={styles.menuIcon} />
        </View>

        <View style={{ flexDirection: "row" }}>
          <AntDesign name="phone" size={60} style={styles.menuIcon} />
          <AntDesign name="book" size={60} style={styles.menuIcon} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    backgroundColor: "#2564D3",
    flex: 0.1,
  },

  headerText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 700,
    textAlign: "center",
    padding: 20,
  },

  box2: {
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  menuIcon: {
    margin: 15,
    color: "green",
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
  },
});

export default Pembatalan;
