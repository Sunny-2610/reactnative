import React from "react";
import { View, Text, StyleSheet, ImageBackground, Pressable } from "react-native";
import { Link } from "expo-router";
import coffeeIcon from "@/assets/images/iced-coffee.png";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={coffeeIcon}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.title}>Coffee Shop</Text>
        <Link href="/explore" style={{ marginHorizontal: "auto" }} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Explore</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    marginBottom: 20,
  },
  button: {
    height: 60,
    borderRadius: 20,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    padding: 6,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    padding: 4,
  },
});

