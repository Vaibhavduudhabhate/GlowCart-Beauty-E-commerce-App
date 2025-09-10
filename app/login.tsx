import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Hello Again!</Text>
      <Text style={styles.subheader}>Welcome back you’ve been missed.</Text>

      <TextInput style={styles.input} placeholder="Enter your email Id" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      <TouchableOpacity style={styles.primaryBtn}>
        <Text style={styles.primaryBtnText}>Log In</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>
        Not a Member?{" "}
        <Text style={styles.link} onPress={() => router.push("/signup")}>
          Register Now
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
    marginBottom: 8,
  },
  subheader: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 30,
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
