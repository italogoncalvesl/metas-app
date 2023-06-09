import React from "react";
import { NativeBaseProvider, Box } from "native-base";
import { Routes } from "./src/routes";
import "react-native-gesture-handler";

export default function App() {
  return (
    <NativeBaseProvider>
      <Routes />
    </NativeBaseProvider>
  );
}
