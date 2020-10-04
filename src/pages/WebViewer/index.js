import React from "react";
import { SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

const WebViewer = ({ navigation, route }) => {
  return (
    <SafeAreaView style={{ flex: 1, paddingVertical: 50 }}>
      <WebView source={{ uri: `${route.params.url}` }} />
    </SafeAreaView>
  );
};

export default WebViewer;
