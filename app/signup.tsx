import { View, Text, TextInput, StyleSheet, TouchableOpacity, StatusBar,KeyboardAvoidingView,ScrollView ,Platform} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function SignupScreen() {
  const router = useRouter();

  return (

    <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <ScrollView 
            contentContainerStyle={{ flexGrow: 1 }} 
            showsVerticalScrollIndicator={false}
          >
    <View style={styles.container}>
      <StatusBar backgroundColor="#F1B0B0" barStyle="light-content" />

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
    </ScrollView>
        </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFEDE8",
  },
  headerContainer: {
    backgroundColor: "#F1B0B0",
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 25,
    borderBottomLeftRadius: 42,
    borderBottomRightRadius: 42,
  },
  header: {
    fontSize: 34,
    lineHeight:36,
    fontFamily:"PlayfairDisplay-VariableFont_wght",
    fontWeight: "900",
    color: "#B84953",
    textAlign: "center",
    marginBottom: 8,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 60,
  },
  inputContainer: {
    position: "relative",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#FFFFFF",
    padding: 17,
    paddingRight: 52,
    paddingLeft:32,
    borderRadius: 12,
    fontSize: 16,
    lineHeight:34,
    borderWidth: 0.5,
    borderColor: "#989696",
  },
  inputIcon: {
    position: "absolute",
    right: 25,
    top: 25,
  },
  primaryBtn: {
    backgroundColor: "#B84953",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 150,
    marginTop: 40,
  },
  primaryBtnText: {
    color: "#fff",
    fontSize: 24,
    lineHeight:31,
    fontWeight: "600",
    letterSpacing:1,
  },
  footer: {
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 30,
  },
  footerText: {
    fontSize: 16,
    lineHeight:34,
    color: "#6C6C6C",
  },
  link: {
    color: "#B84953",
    fontWeight: "600",
  },
});
