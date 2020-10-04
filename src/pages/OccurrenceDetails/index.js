import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import scroll2 from "../../assets/scroll2.png";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const LatestOccurrences = ({ navigation }) => {
  const createOKAlert = () => {
    Alert.alert(
      "Success!",
      "Your report has been submitted.",
      [{ text: "OK", onPress: () => navigation.navigate("Homepage") }],
      { cancelable: false }
    );
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.headerImg}
        source={scroll2}
        imageStyle={{ resizeMode: "cover" }}
      >
        <View style={styles.headerButtonsView}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate("ReportFire")}
          >
            <Feather name="chevron-left" size={30} color="#FFF" />
          </TouchableWithoutFeedback>

          <Feather name="menu" size={30} color="#FFF" />
        </View>
        <Text
          style={{
            width: 310,
            top: 48,
            fontWeight: "bold",
            color: "#FCFCFC",
            fontSize: 36,
          }}
        >
          Occurrence details
        </Text>
        <Text style={styles.imageSubTitle}>
          Before finishing fill out the form
        </Text>
      </ImageBackground>
      <View style={styles.optionsContainer}>
        <Text
          style={{
            fontSize: 20,
            lineHeight: 27,
            fontWeight: "bold",
            color: "#282E00",
            marginLeft: 29,
            marginBottom: 30,
          }}
        >
          Location state
        </Text>
        <View style={styles.optionsContainerTop}>
          <View style={styles.optionsContainerSquare}>
            <Text style={styles.optionsContainerSquareTitle}>Rain: </Text>
            <View style={styles.radioContainer}>
              <Feather name="circle" size={16} />
              <Text style={styles.radioOption}>Yes</Text>
            </View>
            <View style={styles.radioContainer}>
              <Feather name="circle" size={16} />
              <Text style={styles.radioOption}>No</Text>
            </View>
          </View>
          <View style={styles.optionsContainerSquare}>
            <Text style={styles.optionsContainerSquareTitle}>Moist Soil: </Text>
            <View style={styles.radioContainer}>
              <Feather name="circle" size={16} />
              <Text style={styles.radioOption}>Yes</Text>
            </View>
            <View style={styles.radioContainer}>
              <Feather name="circle" size={16} />
              <Text style={styles.radioOption}>No</Text>
            </View>
          </View>
        </View>
        <View style={styles.optionsContainerTop}>
          <View style={styles.optionsContainerSquare}>
            <Text style={styles.optionsContainerSquareTitle}>Wind: </Text>
            <View style={styles.radioContainer}>
              <Feather name="circle" size={16} />
              <Text style={styles.radioOption}>Weak/Absent</Text>
            </View>
            <View style={styles.radioContainer}>
              <Feather name="circle" size={16} />
              <Text style={styles.radioOption}>Moderate</Text>
            </View>
            <View style={styles.radioContainer}>
              <Feather name="circle" size={16} />
              <Text style={styles.radioOption}>Strong</Text>
            </View>
          </View>
          <View style={styles.optionsContainerSquare}>
            <Text style={styles.optionsContainerSquareTitle}>Sky: </Text>
            <View style={styles.radioContainer}>
              <Feather name="circle" size={16} />
              <Text style={styles.radioOption}>Clean</Text>
            </View>
            <View style={styles.radioContainer}>
              <Feather name="circle" size={16} />
              <Text style={styles.radioOption}>Partly cloudy</Text>
            </View>
            <View style={styles.radioContainer}>
              <Feather name="circle" size={16} />
              <Text style={styles.radioOption}>Partly cloudy</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.detailsButton}>
          <Text
            style={{ color: "#FFF", fontSize: 19, fontWeight: "bold" }}
            onPress={createOKAlert}
          >
            REPORT
          </Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerImg: {
    width: 500,
    height: 300,
    top: 0,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  headerButtonsView: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 80,
  },
  detailsButton: {
    width: 140,
    height: 40,
    borderRadius: 18,
    backgroundColor: "#b50011",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  imageSubTitle: {
    fontWeight: "300",
    fontSize: 15,
    color: "#FCFCFC",
    lineHeight: 20,
    marginTop: 50,
    marginLeft: -95,
  },
  optionsContainer: {
    height: 500,
    width: 350,
    marginTop: 300,
  },
  optionsContainerTop: {
    width: 350,
    height: 140,
    marginBottom: 60,
    paddingHorizontal: 29,
    flexDirection: "row",
    alignItems: "center",
  },
  optionsContainerSquare: {
    width: 150,
    height: 120,
    marginRight: 20,
  },
  optionsContainerSquareTitle: {
    fontWeight: "bold",
    fontSize: 20,
    lineHeight: 27,
    color: "#282E00",
  },
  radioContainer: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
  },
  radioOption: {
    fontSize: 16,
    lineHeight: 20,
    color: "#3A3A3A",
    marginLeft: 5,
  },
});

export default LatestOccurrences;
