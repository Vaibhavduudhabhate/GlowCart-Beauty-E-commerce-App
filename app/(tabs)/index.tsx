import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useRouter } from "expo-router";

export default function GetStartedScreen() {
  const router = useRouter();

  return (
    // <View>
    <ImageBackground
      source={require("../../assets/images/getStarted.png")}
      style={styles.bg}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Viorra</Text>
        <Text style={styles.subtitle}>Your Beauty, Delivered.</Text>

        <TouchableOpacity
          style={styles.primaryBtn}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.primaryBtnText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
    // </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlay: {
    padding: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 36,
    fontWeight: "700",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 30,
  },
  primaryBtn: {
    backgroundColor: "#B33A3A",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 12,
  },
  primaryBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
