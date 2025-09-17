import { View, Text, TextInput, StyleSheet, TouchableOpacity,Image,ScrollView, 
  KeyboardAvoidingView,Platform, } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen() {
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
              <Ionicons name="mail-outline" size={20} color="#37415199" style={styles.inputIcon} />
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
                <Image
                  source={require("../assets/images/Google.png")}
                  style={{ width: 60, height: 60, resizeMode: "contain" }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialBtn} onPress={() => router.push("/signup")}>
                <Image
                  source={require("../assets/images/Apple.png")}
                  style={{ width: 60, height: 60, resizeMode: "contain" }}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialBtn}>
                <Image
                  source={require("../assets/images/Facebook.png")}
                  style={{ width: 60, height: 60, resizeMode: "contain" }}
                />
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
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F5",
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
  subheader: {
    fontSize: 26,
    lineHeight:32,
    fontFamily:"inter",
    color: "#AD7373",
    textAlign: "center",
    fontWeight:"500",
    // opacity: 0.8,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 60,
  },
  inputContainer: {
    position: "relative",
    marginBottom: 15,
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
    top: 23,
  },
  forgotPassword: {
    alignSelf: "flex-end",
    marginBottom: 35,
  },
  forgotPasswordText: {
    fontFamily:"inter",
    color: "#CC3D3D",
    fontSize: 16,
    lineHeight:32,
    fontWeight: "400",
    textDecorationLine:"underline"
  },
  primaryBtn: {
    backgroundColor: "#B84953",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginBottom: 30,
  },
  primaryBtnText: {
    color: "#fff",
    fontSize: 24,
    lineHeight:31,
    fontWeight: "600",
    letterSpacing:1,
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#6C6C6C",
  },
  dividerText: {
    marginHorizontal: 12,
    color: "#6C6C6C",
    fontSize: 15,
    lineHeight:35,
    fontFamily:"inter",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 40,
    marginBottom: 70,
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
