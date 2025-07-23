import { FunctionComponent, useEffect, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Platform,
} from "react-native";
import { auth } from "../firebase";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import React from "react";

type RootParamList = {
  Home: undefined;
  Login: undefined;
};

const LoginScreen: FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<NavigationProp<RootParamList>>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      if (user) {
        navigation.navigate("Home");
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    if (!email || !password) {
      alert("Please enter your details");
      return;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCreds: { user: any }) => {
        const user = userCreds.user;
        console.log("Registered with: ", user?.email);
      })
      .catch((error: { code: string; message: string }) => {
        switch (error.code) {
          case "auth/invalid-email":
            alert("Enter a valid email");
            break;
          case "auth/email-already-in-use":
            alert("Email is already in use");
            break;
          case "auth/weak-password":
            alert("Password should be at least 6 characters");
            break;
          default:
            alert("Registration failed");
        }
      });
  };

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter your details");
      return;
    }

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCreds: { user: any }) => {
        const user = userCreds.user;
        console.log("Logged in with: ", user?.email);
      })
      .catch((error: { code: string; message: string }) => {
        switch (error.code) {
        case "auth/invalid-email":
          alert("Enter a valid email");
          break;
        case "auth/user-not-found":
          alert("User not found");
          break;
        case "auth/wrong-password":
          alert("Invalid password");
          break;
        case "auth/invalid-credential":
          alert("Invalid credentials.");
          break;
        default:
          alert("Invalid credentials.");
        }
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Password"
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleLogin} style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>
          Powered by AI and real-time analysis using API
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 60,
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 200,
    height: 100,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "grey",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  button: {
    backgroundColor: "red",
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 10,
    borderColor: "red",
    borderWidth: 1,
  },
  buttonOutlineText: {
    color: "red",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  footerText: {
    position: "absolute",
    bottom: 20,
    fontSize: 12,
    color: "gray",
    textAlign: "center",
  },
});
