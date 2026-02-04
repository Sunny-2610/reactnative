import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { Link } from "expo-router";
import coffeeIcon from "@/assets/images/iced-coffee.png";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={coffeeIcon} 
      resizeMode="cover"
      style={styles.image}>
        <Text style={styles.title}>Coffee Shop</Text>
        <Link href="/explore" style={styles.link}>Explore</Link>
      </ImageBackground>
    </View>
  );
};

export default App;

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
  link: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    textDecorationLine: "underline",
    padding: 4,
  },
});




