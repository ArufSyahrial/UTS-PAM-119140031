import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Button } from "react-native-web";

const Beranda = () => {
  return (
    <View style={styles.background}>
      <View style={styles.body}>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 65,
          }}
        >
          <Text style={styles.title}>Kapalzy</Text>
        </View>

        <View style={styles.inputLayer}>
          <Text style={styles.inputHeader}>Pelabuhan Awal</Text>
          <View style={{ flexDirection: "row" }}>
            <Fontisto name="ship" size={24} style={styles.icon} />
            <TextInput
              placeholder="Pilih Pelabuhan Awal"
              style={styles.input}
            ></TextInput>
          </View>
        </View>

        <View style={styles.inputLayer}>
          <Text style={styles.inputHeader}>Pelabuhan Tujuan</Text>
          <View style={{ flexDirection: "row" }}>
            <Fontisto name="ship" size={24} style={styles.icon} />
            <TextInput
              placeholder="Pilih Pelabuhan Tujuan"
              style={styles.input}
            ></TextInput>
          </View>
        </View>

        <View style={styles.inputLayer}>
          <Text style={styles.inputHeader}>Kelas Layanan</Text>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="seat-passenger"
              size={24}
              style={styles.icon}
            />
            <TextInput
              placeholder="Pilih Layanan"
              style={styles.input}
            ></TextInput>
          </View>
        </View>

        <View style={styles.inputLayer}>
          <Text style={styles.inputHeader}>Tanggal Masuk Pelabuhan</Text>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="calendar" size={24} style={styles.icon} />
            <TextInput
              placeholder="Pilih Tanggal Masuk"
              style={styles.input}
            ></TextInput>
          </View>
        </View>

        <View style={styles.inputLayer}>
          <Text style={styles.inputHeader}>Jam Masuk Pelabuhan</Text>
          <View style={{ flexDirection: "row" }}>
            <Entypo name="clock" size={24} style={styles.icon} />
            <TextInput
              placeholder="Pilih Jam Masuk"
              style={styles.input}
            ></TextInput>
          </View>
        </View>

        <View
          style={{
            marginLeft: 20,
            marginRight: 20,
            height: 28,
            marginTop: 20,
            marginBottom: 30,
            borderWidth: 1,
            borderColor: "grey",
            borderRadius: 3,
          }}
        >
          {/* <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: 14,
                color: "black",
                fontWeight: "700",
                marginLeft: 10,
                marginTop: 2,
              }}
            >
              Dewasa
            </Text>
            <Text
              style={{
                fontSize: 14,
                color: "black",
                fontWeight: "700",
                marginLeft: 165,
                marginTop: 2,
              }}
            >
              1 Orang
            </Text>
          </View> */}
        </View>

        <View style={styles.button}>
          <Button title="Buat Tiket" color="orange"></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e8e8e8",
  },

  body: {
    backgroundColor: "white",
    height: 550,
    marginBottom: 50,
    width: 330,
    borderRadius: 3,
  },

  title: { fontSize: 25, color: "blue", fontWeight: "bold" },

  inputLayer: { marginTop: 20 },

  inputHeader: { color: "black", fontSize: 14, marginLeft: 20 },

  input: {
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "#f5f5f5",
    height: 25,
    width: 240,
    fontSize: 12,
    borderRadius: 3,
    marginLeft: 10,
    marginTop: 3,
    padding: 10,
  },

  icon: { color: "blue", marginLeft: 20, marginTop: 3 },

  button: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Beranda;
