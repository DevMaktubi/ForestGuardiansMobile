import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Homepage from "./src/pages/Homepage";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import ForgotPassword from "./src/pages/ForgotPassword";
import LatestOccurrences from "./src/pages/LatestOccurrences";
import OccurrenceDetails from "./src/pages/OccurrenceDetails";
import ReportFire from "./src/pages/ReportFire";
import NearFires from "./src/pages/NearFires";
import EnvironmentalImpact from "./src/pages/EnvironmentalImpact";
import WebViewer from "./src/pages/WebViewer";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Homepage"
          component={Homepage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LatestOccurrences"
          component={LatestOccurrences}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OccurrenceDetails"
          component={OccurrenceDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NearFires"
          component={NearFires}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ReportFire"
          component={ReportFire}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="EnvironmentalImpact"
          component={EnvironmentalImpact}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="WebViewer"
          component={WebViewer}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
