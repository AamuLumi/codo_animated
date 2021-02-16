import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";

import SecondView from "./SecondView";

export default function App() {
  const [viewOpened, setOpenView] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#121212");

  const openSecondView = () => {
    setOpenView(true);
    setBackgroundColor("#402040");
  };
  const closeSecondView = () => {
    setOpenView(false);
    setBackgroundColor("#121212");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor }}>
      <View style={styles.container}>
        <StatusBar style="light" />

        <Text
          style={{
            fontSize: 40,
            color: "white",
            marginBottom: 64,
            fontWeight: "100",
          }}
        >
          SUPER READER
        </Text>

        <Button onPress={openSecondView} title="Lire un livre" />

        {viewOpened && <SecondView onClose={closeSecondView} />}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
});
