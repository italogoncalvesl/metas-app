import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";

const { Screen, Navigator } = createDrawerNavigator();
// Desmenbrando as telas e a navegação delas

import { Home } from "../screens/home/index";
import { Metas } from "../screens/metas";
// Telas importadas para aparecerem no Stack

export function DrawerRoutes() {
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
          drawerLabel: "Home",
          drawerIcon: () => <MaterialIcons name="home" size={28} />,
        }}
      />
      <Screen name="Metas" component={Metas} />
    </Navigator>
  );
}
