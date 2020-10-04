import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Linking,
} from "react-native";

import { Feather } from "@expo/vector-icons";

import scroll3 from "../../assets/scroll3.png";
import card1 from "../../assets/card1.png";
import card2 from "../../assets/card2.jpg";
import {
  TextInput,
  TouchableWithoutFeedback,
} from "react-native-gesture-handler";

const LatestOccurrences = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.headerImg}
        source={scroll3}
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
          Environmental Impact
        </Text>
        <Text style={{ top: 150, width: 300, fontSize: 15, color: "#FCFCFC" }}>
          Awareness Links
        </Text>
      </ImageBackground>
      <View style={styles.searchBar}>
        <TextInput
          style={{ fontSize: 16, lineHeight: 131, flex: 1 }}
          placeholder="Search"
        />
        <Feather name="search" size={16} />
      </View>
      <ScrollView
        style={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.scrollContent}>
          <Image style={styles.scrollContentImg} source={card1} />
          <View style={styles.scrollContentCard}>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 13,
                lineHeight: 15,
                color: "#27260A",
                marginTop: 10,
              }}
            >
              QUEIMADAS.DGI.INPE.BR
            </Text>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 16,
                lineHeight: 22,
                color: "#3A3A3A",
                fontWeight: "bold",
                width: 300,
              }}
              onPress={() =>
                navigation.navigate("WebViewer", {
                  url: "http://queimadas.dgi.inpe.br/queimadas/portal",
                })
              }
            >
              Check INPE graphs on the Current Situation of the fires
            </Text>
          </View>
        </View>
        <View style={styles.scrollContent}>
          <Image style={styles.scrollContentImg} source={card2} />
          <View style={styles.scrollContentCard}>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 13,
                lineHeight: 15,
                color: "#27260A",
                marginTop: 10,
              }}
            >
              G1.GLOBO.COM
            </Text>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 16,
                lineHeight: 22,
                color: "#3A3A3A",
                fontWeight: "bold",
                width: 300,
              }}
              onPress={() =>
                navigation.navigate("WebViewer", {
                  url:
                    "https://g1.globo.com/jornal-nacional/noticia/2020/10/03/incendios-no-pantanal-voltam-a-atingir-areas-que-ja-tinham-sido-queimadas-este-ano.ghtml",
                })
              }
            >
              Wild Fires in Pantanal are back to the areas that they have
              already burned
            </Text>
          </View>
        </View>
        <View style={styles.scrollContent}>
          <Image style={styles.scrollContentImg} source={card1} />
          <View style={styles.scrollContentCard}>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 13,
                lineHeight: 15,
                color: "#27260A",
                marginTop: 10,
              }}
            >
              QUEIMADAS.DGI.INPE.BR
            </Text>
            <Text
              style={{
                marginLeft: 20,
                fontSize: 16,
                lineHeight: 22,
                color: "#3A3A3A",
                fontWeight: "bold",
                width: 300,
              }}
              onPress={() =>
                navigation.navigate("WebViewer", {
                  url: "http://queimadas.dgi.inpe.br/queimadas/portal",
                })
              }
            >
              Check INPE graphs on the Current Situation of the fires
            </Text>
          </View>
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
    top: -200,
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
    marginTop: 350,
    marginLeft: 40,
  },
  scrollContent: {
    width: 330,
    height: 250,
    marginBottom: 15,
  },
  scrollContentImg: {
    width: 330,
    height: 170,
  },
  scrollContentCard: {
    width: 330,
    height: 80,
    borderWidth: 1,
    borderTopColor: "#E5E5E5",
    borderBottomColor: "#E5E5E5",
    borderLeftColor: "#E5E5E5",
    borderRightColor: "#E5E5E5",
    borderRadius: 5,
    backgroundColor: "#FFFFFF",
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
  searchBar: {
    width: 330,
    height: 40,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    top: 320,
    borderBottomColor: "#959595",
    borderBottomWidth: 1,
  },
});

export default LatestOccurrences;
