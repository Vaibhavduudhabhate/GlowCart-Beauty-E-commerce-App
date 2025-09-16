import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, SafeAreaView, StatusBar ,Animated } from "react-native";
import { useRouter } from "expo-router";
import { useRef, useState } from "react";

export default function GetStartedScreen() {
  const progress = useRef(new Animated.Value(0)).current;
  const [showProgress, setShowProgress] = useState(false);
  const router = useRouter();

  const handleGetStarted = () => {
    setShowProgress(true);

    // Animate progress from 0 to 1 over 2 seconds
    Animated.timing(progress, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start(() => {
      // After animation finishes, redirect
      router.push("/login");
    });
  };

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ["0%", "100%"],
  });

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
              onPress={handleGetStarted}
              activeOpacity={0.8}
            >
              <Text style={styles.primaryBtnText}>Get Started</Text>
            </TouchableOpacity>

            {showProgress && (
              <View style={styles.progressBarContainer}>
                <Animated.View style={[styles.progressBarFill, { width: progressWidth }]} />
              </View>
            )}
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
    fontFamily:"Italina-Regular",
    lineHeight:50,
    fontSize: 54,
    fontWeight: "400",
    color: "#FFFFFF",
    letterSpacing: 4,
    marginBottom: 20,
    textShadowColor: "rgba(0, 0, 0, 0.1)",
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontFamily:"inter",
    fontSize: 24,
    lineHeight:21,
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
    paddingHorizontal: 32,
    borderRadius: 16,
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
    fontFamily:"inter",
    fontSize: 24,
    lineHeight:21,
    color:"#ffffff",
    fontWeight: "500",
    letterSpacing: 0.5,
    textAlign: "center",
  },
   progressBarContainer: {
    height: 12,
    width: 180,
    backgroundColor: "#D5C0BA",
    borderRadius: 6,
    overflow: "hidden",
    alignSelf: "center",
    marginTop: 20,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#F3E2DD",
  },
});
