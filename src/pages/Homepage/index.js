import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import scroll1 from "../../assets/scroll1.png";
import scroll2 from "../../assets/scroll2.png";
import scroll3 from "../../assets/scroll3.png";
import scroll4 from "../../assets/scroll4.png";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Homepage = ({ navigation, route }) => {
  const [username, setUsername] = useState("");
  useEffect(() => {
    setUsername(route.params.username);
  });
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <View style={styles.location}>
          <Feather name="map-pin" size={25} color="brown" />
          <Text style={{ marginLeft: 3, fontWeight: "bold", color: "#27260A" }}>
            Mato Grosso, Cuiabá
          </Text>
        </View>
        <Feather name="menu" size={30} />
      </View>
      <View style={styles.welcomeView}>
        <Text
          style={{
            fontWeight: "800",
            fontSize: 36,
            lineHeight: 49,
            color: "#27260A",
          }}
        >
          Welcome
        </Text>
        <Text
          style={{
            fontWeight: "300",
            fontSize: 15,
            width: 230,
            color: "#3A3A3A",
          }}
        >
          Understand the situation of forest fires near you
        </Text>
      </View>
      <ScrollView
        contentContainerStyle={styles.mainScroll}
        horizontal={true}
        alwaysBounceHorizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("ReportFire")}
        >
          <ImageBackground
            source={scroll2}
            style={styles.scrollContent}
            imageStyle={{ borderRadius: 18 }}
          >
            <Text style={styles.imageTitle}>Did you see a fire spot?</Text>
            <Text style={styles.imageSubTitle}>Report to the firefighters</Text>
          </ImageBackground>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("LatestOccurrences")}
        >
          <ImageBackground
            source={scroll1}
            style={styles.scrollContent}
            imageStyle={{ borderRadius: 18 }}
          >
            <Text style={styles.imageTitle}>Fires near you</Text>
            <Text style={styles.imageSubTitle}>Help contain the fire</Text>
          </ImageBackground>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("EnvironmentalImpact")}
        >
          <ImageBackground
            source={scroll3}
            style={styles.scrollContent}
            imageStyle={{ borderRadius: 18 }}
          >
            <Text style={styles.imageTitle}>Environmental Impact</Text>
            <Text style={styles.imageSubTitle}>Awareness links</Text>
          </ImageBackground>
        </TouchableWithoutFeedback>
      </ScrollView>
      <View style={styles.carouselButtons}>
        <Feather
          style={{
            backgroundColor: "#5A4244",
            borderRadius: 5,
            borderColor: "#5A4244",
            marginRight: 18,
          }}
          color="#5A4244"
          name="circle"
          size={10}
        />
        <Feather
          style={{
            backgroundColor: "#D8D8D8",
            borderRadius: 5,
            borderColor: "#D8D8D8",
            marginRight: 18,
          }}
          color="#D8D8D8"
          name="circle"
          size={10}
        />
        <Feather
          style={{
            backgroundColor: "#D8D8D8",
            borderRadius: 5,
            borderColor: "#D8D8D8",
            marginRight: 18,
          }}
          color="#D8D8D8"
          name="circle"
          size={10}
        />
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
    fontFamily: "Gilroy-ExtraBold",
  },
  topBar: {
    height: 100,
    width: "100%",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 30,
    top: 30,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  location: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeView: {
    width: "100%",
    paddingHorizontal: 30,
    top: 50,
  },
  mainScroll: {
    width: 920,
    height: 380,
    flexDirection: "row",
    top: 150,
  },
  scrollContent: {
    width: 266,
    height: 380,
    marginLeft: 30,
    resizeMode: "cover",
    backgroundColor: "#000",
    borderRadius: 18,
  },
  carouselButtons: {
    flexDirection: "row",
    width: "100%",
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    bottom: 40,
  },
  imageTitle: {
    fontWeight: "bold",
    fontSize: 27,
    color: "#FCFCFC",
    marginTop: 251,
    lineHeight: 26,
    marginLeft: 21,
  },
  imageSubTitle: {
    fontWeight: "300",
    fontSize: 15,
    color: "#FCFCFC",
    lineHeight: 20,
    marginLeft: 21,
  },
});

export default Homepage;
