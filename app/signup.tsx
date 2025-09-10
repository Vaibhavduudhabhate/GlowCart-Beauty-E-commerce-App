import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function SignupScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Join The Glow!</Text>

      <TextInput style={styles.input} placeholder="Full Name" />
      <TextInput style={styles.input} placeholder="Email Address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirm Password" secureTextEntry />

      <TouchableOpacity style={styles.primaryBtn}>
        <Text style={styles.primaryBtnText}>Create Account</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Already a Member?{" "}
        <Text style={styles.link} onPress={() => router.push("/login")}>
          Log In
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDECEC",
    padding: 25,
    justifyContent: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "#B33A3A",
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  primaryBtn: {
    backgroundColor: "#B33A3A",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },
  primaryBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  footer: {
    marginTop: 20,
    textAlign: "center",
  },
  link: {
    color: "#B33A3A",
    fontWeight: "600",
  },
});
