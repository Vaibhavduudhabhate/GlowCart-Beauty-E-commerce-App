import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, StatusBar } from "react-native";
import { useRouter } from "expo-router";

export default function GetStartedScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <ImageBackground
        source={require("../../assets/images/getStarteddev.png")}
        style={styles.bg}
        resizeMode="cover"
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.content}>
            <View style={styles.brandContainer}>
              <Text style={styles.title}>Viorra</Text>
              <Text style={styles.subtitle}>Your Beauty, Delivered.</Text>
            </View>

            <TouchableOpacity
              style={styles.primaryBtn}
              onPress={() => router.push("/login")}
              activeOpacity={0.8}
            >
              <Text style={styles.primaryBtnText}>Get Started</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C9A7A2",
  },
  bg: {
    flex: 1,
    width: "100%",
    height: "75%",
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 60,
    paddingHorizontal: 30,
  },
  brandContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  title: {
    fontSize: 54,
    fontWeight: "200",
    color: "#FFFFFF",
    letterSpacing: 4,
    marginBottom: 8,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 16,
    color: "#FFFFFF",
    fontWeight: "300",
    letterSpacing: 1,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  primaryBtn: {
    backgroundColor: "#B84953",
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 28,
    alignSelf: "center",
    minWidth: 200,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4.65,
  },
  primaryBtnText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "500",
    letterSpacing: 0.5,
    textAlign: "center",
  },
});
