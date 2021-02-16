import { StatusBar } from "expo-status-bar";
import React, { useRef, useState } from "react";
import {
  Animated,
  Button,
  Easing,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import SecondView from "./SecondView";

export default function App() {
  const [viewOpened, setOpenView] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#121212");
  const secondViewAnimation = useRef(new Animated.Value(0)).current;

  const openSecondView = () => {
    setOpenView(true);
    setBackgroundColor("#402040");

    Animated.sequence([
      Animated.timing(secondViewAnimation, {
        duration: 500,
        easing: Easing.bounce,
        toValue: 0.7,
        useNativeDriver: false,
      }),
      Animated.timing(secondViewAnimation, {
        duration: 500,
        easing: Easing.bounce,
        toValue: 0.3,
        useNativeDriver: false,
      }),
      Animated.timing(secondViewAnimation, {
        duration: 500,
        easing: Easing.bounce,
        toValue: 1,
        useNativeDriver: false,
      }),
    ]).start();
  };
  const closeSecondView = () => {
    Animated.timing(secondViewAnimation, {
      duration: 500,
      toValue: 0,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      setOpenView(false);
    }, 500);
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

        {viewOpened && (
          <Animated.View
            style={{
              position: "absolute",
              top: secondViewAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: ["100%", "0%"],
              }),
              bottom: 0,
              left: 0,
              right: 0,
            }}
          >
            <SecondView onClose={closeSecondView} />
          </Animated.View>
        )}
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
