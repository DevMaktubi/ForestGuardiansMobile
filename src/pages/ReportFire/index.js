import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import scroll2 from "../../assets/scroll2.png";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const LatestOccurrences = ({ navigation }) => {
  const [location, setLocation] = useState({
    countryCode: "",
    country: null,
    state: null,
    stateCode: "",
    location: "",
  });
  const onSelect = (country) => {
    setLocation({ country: country, countryCode: country.cca2 });
  };
  const onSelect2 = (country) => {
    setLocation({ state: country, stateCode: country.cca2 });
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
            onPress={() => navigation.navigate("Homepage")}
          >
            <Feather name="chevron-left" size={30} color="#FFF" />
          </TouchableWithoutFeedback>

          <Feather name="menu" size={30} color="#FFF" />
        </View>
        <Text
          style={{
            width: 300,
            top: 48,
            fontWeight: "bold",
            color: "#FCFCFC",
            fontSize: 36,
          }}
        >
          Report fire Outbreak
        </Text>
      </ImageBackground>
      <View style={styles.formContainer}>
        <View style={styles.picker}>
          <Text style={styles.pickerText}>Country:</Text>
          <Feather name="chevron-down" size={20} style={{ marginRight: 15 }} />
        </View>
        <View style={styles.picker}>
          <Text style={styles.pickerText}>State:</Text>
          <Feather name="chevron-down" size={20} style={{ marginRight: 15 }} />
        </View>
        <View style={styles.picker}>
          <Text style={styles.pickerText}>Location:</Text>
          <Feather name="chevron-down" size={20} style={{ marginRight: 15 }} />
        </View>
        <Text style={{ fontSize: 17, lineHeight: 20, color: "#B50011" }}>
          select on the map
        </Text>
        <View style={styles.uploadInput}>
          <Feather name="camera" size={20} />
          <Text style={{ marginLeft: 15 }}>Upload Image</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.detailsButton}
        onPress={() => navigation.navigate("OccurrenceDetails")}
      >
        <Text
          style={{
            fontSize: 20,
            lineHeight: 23,
            color: "#FFF",
            fontWeight: "bold",
          }}
        >
          CONTINUE
        </Text>
      </TouchableOpacity>
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
  },
  formContainer: {
    width: 306,
    height: 500,
    marginTop: 200,
    marginHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  picker: {
    width: 306,
    height: 50,
    borderWidth: 1,
    borderRightColor: "#E5E5E5",
    borderLeftColor: "#E5E5E5",
    borderTopColor: "#E5E5E5",
    borderBottomColor: "#E5E5E5",
    borderRadius: 5,
    marginBottom: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  pickerText: {
    marginLeft: 15,
    fontSize: 20,
    lineHeight: 27,
    color: "#282E00",
  },
  uploadInput: {
    width: 190,
    height: 45,
    borderRadius: 5,
    borderTopColor: "#E5E5E5",
    borderBottomColor: "#E5E5E5",
    borderLeftColor: "#E5E5E5",
    borderRightColor: "#E5E5E5",
    flexDirection: "row",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});

export default LatestOccurrences;
