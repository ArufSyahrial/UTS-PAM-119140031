import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Pembatalan = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.headerText}>Daftar Pembatalan</Text>
      </View>

      <View style={styles.box2} />
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
  },
});

export default Pembatalan;
