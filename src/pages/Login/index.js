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
  const [secure, setSecure] = useState(true);
  const route = useRoute();
  return (
    <ImageBackground style={styles.backgroundIMG} source={LoginBK}>
      <Text style={styles.firstMessage}>Hello There.</Text>
      <Text style={styles.secondMessage}>Login or sign up to continue</Text>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={async (values) => submitData({ values, navigation })}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.formContainer}>
            <Text style={styles.formLabel}>Username</Text>
            <TextInput
              style={styles.formInput}
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              placeholder="JohnDoe77"
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
            <Text
              style={styles.forgotPassword}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              Forgot password?
            </Text>
            <TouchableOpacity style={styles.loginButton} onPress={handleSubmit}>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 13,
                  lineHeight: 15,
                  fontWeight: "bold",
                }}
              >
                LOGIN
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
        >
          Login
        </Text>
        <Text
          style={
            route.name === "Login"
              ? styles.pageSelectorText1
              : styles.pageSelectorText2
          }
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
    height: 319,
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
    fontWeight: "800",
    left: -70,
  },
  secondMessage: {
    color: "#FFFFFF",
    fontSize: 20,
    lineHeight: 24,
    fontWeight: "300",
    left: -40,
  },
  forgotPassword: {
    fontSize: 14,
    lineHeight: 16,
    fontWeight: "300",
    textAlign: "center",
    alignSelf: "center",
    color: "#3A3A3A",
    marginTop: 10,
    marginBottom: 15,
  },
  loginButton: {
    width: 140,
    height: 40,
    borderRadius: 18,
    backgroundColor: "#b50011",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
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
