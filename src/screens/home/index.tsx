import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();

  function buttonMetas() {
    navigation.navigate("Metas");
  }

  return (
    <View>
      <Text>Home</Text>
      <Button title="Vou para tela metas" onPress={buttonMetas} />
    </View>
  );
}
