import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useRoute } from "@react-navigation/native";

import api from "../../services/api";

import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Formik } from "formik";

import LoginBK from "../../assets/LoginBK.png";

async function submitData({ values, navigation }) {
  try {
    await api.post("/login", {
      loginName: values.username,
      password: values.password,
    });

    navigation.navigate("Homepage", { username: values.username });
  } catch (err) {
    console.log("erro: " + err.message);
  }
}

const Homepage = ({ navigation }) => {
  return (
    <ImageBackground style={styles.backgroundIMG} source={LoginBK}>
      <Text style={styles.firstMessage}>Forgot Password</Text>
      <Text style={styles.secondMessage}>
        We will send a provisional password to the registered email.
      </Text>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={async (values) => submitData({ values, navigation })}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.formContainer}>
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              style={styles.formInput}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="email@gmail.com"
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 13,
                  lineHeight: 15,
                  fontWeight: "bold",
                }}
              >
                SEND
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <View style={styles.pageSelector}>
        <Text style={styles.pageSelectorText2}>Login</Text>
        <Text
          style={styles.pageSelectorText1}
          onPress={() => navigation.navigate("Register")}
        >
          Register
        </Text>
      </View>
      <StatusBar style="auto" />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundIMG: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  formContainer: {
    width: 334,
    height: 200,
    backgroundColor: "#FCFCFC",
    padding: 25,
    borderRadius: 15,
    marginTop: 30,
    marginBottom: 40,
  },
  formLabel: {
    fontSize: 14,
    fontWeight: "300",
    color: "#3A3A3A",
  },
  formInput: {
    borderBottomColor: "#959595",
    borderBottomWidth: 1,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "flex-start",
    marginBottom: 20,
    color: "#785002",
  },
  firstMessage: {
    color: "#FFFFFF",
    fontSize: 35,
    lineHeight: 44,
    fontWeight: "bold",
    left: -35,
  },
  secondMessage: {
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "300",
    width: 280,
    height: 76,
    marginLeft: -50,
    marginTop: 12,
  },
  loginButton: {
    width: 145,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#b50011",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
  },
  pageSelector: {
    width: 220,
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: -120,
    marginLeft: -30,
  },
  pageSelectorText1: {
    fontSize: 25,
    fontWeight: "300",
    color: "#FFFFFF",
    padding: 20,
  },
  pageSelectorText2: {
    fontSize: 25,
    fontWeight: "300",
    color: "#FFC179",
    padding: 20,
    borderRightWidth: 1,
    borderRightColor: "#FCFCFC",
  },
});

export default Homepage;
