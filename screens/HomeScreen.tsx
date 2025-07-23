import { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { auth } from "../firebase"; // ✅ Import Firebase auth
import React from "react";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  PaypalScreen: undefined;
  MpesaScreen: undefined;
  RefundScreen: undefined;
  EmailScreen: undefined;
  ContactScreen: undefined;
  RulesScreen: undefined;
  BinanceScreen: undefined;
  BinancePay: undefined;
  ActionScreen: undefined;
  AccessScreen: undefined;
};

const { width } = Dimensions.get("window");

const HomeScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const slideAnim = useRef(new Animated.Value(-width * 0.7)).current;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    const toValue = menuOpen ? -width * 0.7 : 0;
    Animated.timing(slideAnim, {
      toValue,
      duration: 250,
      useNativeDriver: false,
    }).start();
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: "Login" }],
        });
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity style={styles.hamburgerIcon} onPress={toggleMenu}>
        <Ionicons name="menu" size={30} color="black" />
      </TouchableOpacity>

      {menuOpen && (
        <TouchableWithoutFeedback onPress={toggleMenu}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
      )}

      <Animated.View style={[styles.sidebar, { left: slideAnim }]}>
        <TouchableOpacity onPress={() => navigation.navigate("RulesScreen")}>
          <Text style={styles.menuItem}>Rules and Guidelines</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ContactScreen")}>
          <Text style={styles.menuItem}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("EmailScreen")}>
          <Text style={styles.menuItem}>Support</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.menuItem}>Log out</Text>
        </TouchableOpacity>
      </Animated.View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <View style={styles.boxContainer}>
            <Text style={styles.title}>RISK-FREE PAYMENT - PROVEN & TRUSTED PREDICTOR</Text>
            <Text style={styles.description}>
              1. ⚡ Instant Access - Get premium Aviator predictions immediately after payment.
            </Text>
            <Text style={styles.description}>
              2. 💎 Exclusive Offer - Get full Access for only $199
            </Text>
            <Text style={styles.description}>
              3. 🌐 Backend by Data & AI Precision
            </Text>
            <Text style={styles.content}>
              4. Our predictor uses advanced AI and real-time analysis to give you the best possible winning chances.
            </Text>
            <Text style={styles.content}>
              5. Confidence Guarantee - See the Results for Yourself!
            </Text>
            <Text style={styles.content}>
              6. If you don’t get profits within 7 days, request a full refund - no risk, no worries!
            </Text>
          </View>

          <View style={styles.paymentContainer}>
            <Text style={styles.paymentTitle}>Choose Payment Method</Text>

            <TouchableOpacity
              style={styles.paymentButton}
              onPress={() => navigation.navigate("BinanceScreen")}
            >
              <Text style={styles.paymentText}>Pay with Binance</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.paymentButton}
              onPress={() => navigation.navigate("MpesaScreen")}
            >
              <Text style={styles.paymentText}>Pay with M-Pesa</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.moreContainer}>
          <Text style={styles.moreTitle}>More</Text>

          <TouchableOpacity
            style={styles.moreButton}
            onPress={() => navigation.navigate("RefundScreen")}
          >
            <Text style={styles.moreText}>Request for a Refund</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.moreButton}
            onPress={() => navigation.navigate("AccessScreen")}
          >
            <Text style={styles.moreText}>Access Predictor</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>
            🔥 Join 500+ successful players and start winning today!
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    padding: 15,
    marginTop: 40,
  },
  container: {
    alignItems: "center",
  },
  boxContainer: {
    backgroundColor: "#fff4f4",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ffcccc",
    width: "100%",
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "red",
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  content: {
    fontSize: 14,
    marginBottom: 5,
    color: "#333",
  },
  paymentContainer: {
    width: "100%",
    backgroundColor: "#f9f9f9",
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  paymentTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  paymentButton: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  paymentText: {
    color: "white",
    fontWeight: "600",
    fontSize: 15,
  },
  hamburgerIcon: {
    position: "absolute",
    top: 40,
    left: 20,
    zIndex: 1001,
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
    zIndex: 1000,
  },
  sidebar: {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: width * 0.7,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 20,
    borderRightWidth: 1,
    borderColor: "#ddd",
    zIndex: 1002,
  },
  menuItem: {
    fontSize: 16,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    color: "#333",
  },
  moreContainer: {
    marginTop: 15,
    backgroundColor: "#f1f1f1",
    padding: 10,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  moreTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  moreButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  moreText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 14,
  },
  footer: {
    marginTop: 20,
    padding: 10,
    alignItems: "center",
  },
  footerText: {
    color: "blue",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
  },
});
