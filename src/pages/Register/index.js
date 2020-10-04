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
  if (values.password !== values.passwordConfirmed) {
    console.log("Senhas diferentes");
    return;
  }
  console.log(values);
  try {
    await api.post("/createUser", {
      loginName: values.loginName,
      email: values.email,
      name: values.loginName,
      password: values.password,
    });

    navigation.navigate("Login");
  } catch (err) {
    console.log("Erro: " + err.message);
  }
}

const Homepage = ({ navigation }) => {
  const [secure, setSecure] = useState(true);
  const route = useRoute();
  return (
    <ImageBackground style={styles.backgroundIMG} source={LoginBK}>
      <Text style={styles.firstMessage}>Create Account</Text>
      <Formik
        initialValues={{
          loginName: "",
          email: "",
          password: "",
          passwordConfirmed: "",
        }}
        onSubmit={(values) => submitData({ values, navigation })}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.formContainer}>
            <Text style={styles.formLabel}>Name</Text>
            <TextInput
              style={styles.formInput}
              onChangeText={handleChange("loginName")}
              onBlur={handleBlur("loginName")}
              value={values.loginName}
              placeholder="JohnDoe77"
            />
            <Text style={styles.formLabel}>Email</Text>
            <TextInput
              style={styles.formInput}
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="email@gmail.com"
            />
            <Text style={(styles.formLabel, { marginTop: 20 })}>Password</Text>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <TextInput
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-start",
                  borderBottomColor: "#959595",
                  borderBottomWidth: 1,
                  marginBottom: 20,
                  color: "#785002",
                }}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                secureTextEntry={secure ? true : false}
                placeholder="**************"
              />
              <FontAwesome
                style={{
                  borderBottomWidth: 1,
                  marginBottom: 20,
                  borderBottomColor: "#959595",
                }}
                name={secure ? "eye-slash" : "eye"}
                size={17}
                color="grey"
                onPress={() => setSecure(!secure)}
              />
            </View>
            <Text style={(styles.formLabel, { marginTop: 20 })}>
              Confirm Password
            </Text>
            <View style={{ flexDirection: "row", marginTop: 20 }}>
              <TextInput
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "flex-start",
                  borderBottomColor: "#959595",
                  borderBottomWidth: 1,
                  marginBottom: 20,
                  color: "#785002",
                }}
                onChangeText={handleChange("passwordConfirmed")}
                onBlur={handleBlur("passwordConfirmed")}
                value={values.passwordConfirmed}
                secureTextEntry={secure ? true : false}
                placeholder="**************"
              />
              <FontAwesome
                style={{
                  borderBottomWidth: 1,
                  marginBottom: 20,
                  borderBottomColor: "#959595",
                }}
                name={secure ? "eye-slash" : "eye"}
                size={17}
                color="grey"
                onPress={() => setSecure(!secure)}
              />
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 13,
                  lineHeight: 15,
                  fontWeight: "bold",
                }}
              >
                CONFIRM
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      <View style={styles.pageSelector}>
        <Text
          style={
            route.name === "Login"
              ? styles.pageSelectorText2
              : styles.pageSelectorText1
          }
          onPress={() => navigation.navigate("Login")}
        >
          Login
        </Text>
        <Text
          style={
            route.name === "Login"
              ? styles.pageSelectorText1
              : styles.pageSelectorText2
          }
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
    height: 480,
    backgroundColor: "#FCFCFC",
    padding: 25,
    borderRadius: 15,
    marginTop: 20,
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
    fontWeight: "800",
    alignSelf: "flex-start",
    marginLeft: 30,
  },
  loginButton: {
    width: 140,
    height: 40,
    borderRadius: 18,
    backgroundColor: "#b50011",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
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
    borderRightWidth: 1,
    borderRightColor: "#FCFCFC",
    padding: 20,
  },
  pageSelectorText2: {
    fontSize: 25,
    fontWeight: "300",
    color: "#FFC179",
    padding: 20,
  },
});

export default Homepage;
