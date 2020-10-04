import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import scroll1 from "../../assets/scroll1.png";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const LatestOccurrences = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.headerImg}
        source={scroll1}
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
            top: 148,
            fontWeight: "bold",
            color: "#FCFCFC",
            fontSize: 36,
          }}
        >
          Latest Occurrences
        </Text>
      </ImageBackground>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.scrollContent}>
          <View style={styles.scrollContentLeft}>
            <Text style={styles.scrollContentLeftTitle}>
              Fire in National Park Chapada dos Guimarães
            </Text>
            <Text style={styles.scrollContentLeftSubTitle}>
              23 reports | 64 - 70 min
            </Text>
            <Text style={styles.scrollContentLeftSubTitle}>
              Meeting point: Rodovia GO 239, Km 36 - Vila de São Jorge, Alto
              Paraiso de Goiás - GO, 73770-000
            </Text>
            <View style={styles.scrollContentBottom}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 14,
                  color: "#B50011",
                  lineHeight: 19,
                }}
              >
                Scale 7
              </Text>
              <TouchableOpacity style={styles.detailsButton}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 17,
                    lineHeight: 21,
                    color: "#FFF",
                  }}
                >
                  Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              fontWeight: "300",
              top: 10,
              width: 77,
              height: 19,
              color: "#3A3A3A",
            }}
          >
            22/09/2020
          </Text>
        </View>
        <View style={styles.scrollContent}>
          <View style={styles.scrollContentLeft}>
            <Text style={styles.scrollContentLeftTitle}>
              Fire in Park of Xingu
            </Text>
            <Text style={styles.scrollContentLeftSubTitle}>
              11 reports | 27 - 30 min
            </Text>
            <Text style={styles.scrollContentLeftSubTitle}>
              Meeting point: Rodovia MT 110, Km 59 - Quêrencia - MT, 78643-000
            </Text>
            <View style={styles.scrollContentBottom}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 14,
                  color: "#B50011",
                  lineHeight: 19,
                }}
              >
                Scale 7
              </Text>
              <TouchableOpacity style={styles.detailsButton}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 17,
                    lineHeight: 21,
                    color: "#FFF",
                  }}
                >
                  Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              fontWeight: "300",
              top: 10,
              width: 77,
              height: 19,
              color: "#3A3A3A",
            }}
          >
            22/09/2020
          </Text>
        </View>
        <View style={styles.scrollContent}>
          <View style={styles.scrollContentLeft}>
            <Text style={styles.scrollContentLeftTitle}>
              Fire in National Park Chapada dos Guimarães
            </Text>
            <Text style={styles.scrollContentLeftSubTitle}>
              23 reports | 64 - 70 min
            </Text>
            <Text style={styles.scrollContentLeftSubTitle}>
              Meeting point: Rodovia GO 239, Km 36 - Vila de São Jorge, Alto
              Paraiso de Goiás - GO, 73770-000
            </Text>
            <View style={styles.scrollContentBottom}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 14,
                  color: "#B50011",
                  lineHeight: 19,
                }}
              >
                Scale 7
              </Text>
              <TouchableOpacity style={styles.detailsButton}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 17,
                    lineHeight: 21,
                    color: "#FFF",
                  }}
                >
                  Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              fontWeight: "300",
              top: 10,
              width: 77,
              height: 19,
              color: "#3A3A3A",
            }}
          >
            22/09/2020
          </Text>
        </View>
      </ScrollView>
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
    height: 500,
    top: -230,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  headerButtonsView: {
    width: "100%",
    height: 50,
    top: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 80,
  },
  scrollContainer: {
    width: 370,
    height: "100%",
    marginTop: 300,
    marginBottom: 54,
    marginLeft: 22,
  },
  scrollContent: {
    width: 350,
    height: 202,
    marginBottom: 33,
    borderTopColor: "#E5E5E5",
    borderBottomColor: "#E5E5E5",
    borderLeftColor: "#E5E5E5",
    borderRightColor: "#E5E5E5",
    borderRadius: 5,
    backgroundColor: "#FFF",
    borderWidth: 1,
    padding: 10,
    flexDirection: "row",
  },
  scrollContentLeft: {
    width: 252,
  },
  scrollContentLeftTitle: {
    fontSize: 22,
    fontWeight: "bold",
    lineHeight: 29,
  },
  scrollContentLeftSubTitle: {
    fontSize: 14,
    lineHeight: 19,
    fontWeight: "300",
    color: "#27260A",
    marginTop: 10,
  },
  scrollContentBottom: {
    flexDirection: "row",
    marginTop: 8,
  },
  detailsButton: {
    width: 140,
    height: 40,
    borderRadius: 18,
    backgroundColor: "#b50011",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 140,
    marginTop: 5,
  },
});

export default LatestOccurrences;
