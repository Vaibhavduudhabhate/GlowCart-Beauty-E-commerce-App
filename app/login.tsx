import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar, Dimensions } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#F8A5A5" barStyle="light-content" />

      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Hello Again!</Text>
        <Text style={styles.subheader}>Welcome back you've been missed.</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email Id"
            placeholderTextColor="#999"
          />
          <Ionicons name="mail-outline" size={20} color="#999" style={styles.inputIcon} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="#999"
          />
          <Ionicons name="eye-outline" size={20} color="#999" style={styles.inputIcon} />
        </View>

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot password</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryBtnText}>Log In</Text>
        </TouchableOpacity>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or Continue With</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Social Login Buttons */}
        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialBtn}>
            <Text style={styles.socialBtnText}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn} onPress={() => router.push("/signup")}>
            <Ionicons name="logo-apple" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialBtn}>
            <Text style={styles.socialBtnText}>f</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Not a Member?{" "}
            <Text style={styles.link} onPress={() => router.push("/signup")}>
              Register Now
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F5",
  },
  headerContainer: {
    backgroundColor: "#F8A5A5",
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 25,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  header: {
    fontSize: 32,
    fontWeight: "700",
    color: "#8B0000",
    textAlign: "center",
    marginBottom: 8,
  },
  subheader: {
    fontSize: 16,
    color: "#8B0000",
    textAlign: "center",
    opacity: 0.8,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 30,
  },
  inputContainer: {
    position: "relative",
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    paddingRight: 45,
    borderRadius: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  inputIcon: {
    position: "absolute",
    right: 15,
    top: 15,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 25,
  },
  forgotPasswordText: {
    color: "#B33A3A",
    fontSize: 14,
    fontWeight: "500",
  },
  primaryBtn: {
    backgroundColor: "#B33A3A",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginBottom: 30,
  },
  primaryBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#DDD",
  },
  dividerText: {
    marginHorizontal: 15,
    color: "#999",
    fontSize: 14,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginBottom: 40,
  },
  socialBtn: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  socialBtnText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4285F4",
  },
  footer: {
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 30,
  },
  footerText: {
    fontSize: 16,
    color: "#666",
  },
  link: {
    color: "#B33A3A",
    fontWeight: "600",
  },
});
