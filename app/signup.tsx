import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function SignupScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#F8A5A5" barStyle="light-content" />

      {/* Header Section */}
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Join The Glow!</Text>
      </View>

      {/* Form Section */}
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
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

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
            placeholderTextColor="#999"
          />
          <Ionicons name="eye-outline" size={20} color="#999" style={styles.inputIcon} />
        </View>

        <TouchableOpacity style={styles.primaryBtn}>
          <Text style={styles.primaryBtnText}>Create Account</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already a Member?{" "}
            <Text style={styles.link} onPress={() => router.push("/login")}>
              Log In
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
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 40,
  },
  inputContainer: {
    position: "relative",
    marginBottom: 20,
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
  primaryBtn: {
    backgroundColor: "#B33A3A",
    padding: 18,
    borderRadius: 15,
    alignItems: "center",
    marginTop: 20,
    marginBottom: 40,
  },
  primaryBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
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
