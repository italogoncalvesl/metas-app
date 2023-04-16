import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackRoutes } from "./stack.routes";
import { DrawerRoutes } from "./drawer.routes";
// Com o navigationContainer é possível compartilhar todas ass telas

export function Routes() {
  return (
    <NavigationContainer>
      <DrawerRoutes />
    </NavigationContainer>
  );
}
