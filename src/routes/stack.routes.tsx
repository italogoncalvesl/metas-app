import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Screen, Navigator } = createNativeStackNavigator();
// Desmenbrando as telas e a navegação delas

import { Home } from "../screens/home/index";
import { Metas } from "../screens/metas";
// Telas importadas para aparecerem no Stack

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerTintColor: "green",
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Metas"
        component={Metas}
        options={{
          headerStyle: {
            backgroundColor: "blue",
          },
          headerTintColor: "#fff",
        }}
      />
    </Navigator>
  );
}
