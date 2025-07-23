import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "expo-router/entry";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import MpesaScreen from './screens/MpesaScreen';
import RefundScreen from './screens/RefundScreen';
import EmailScreen from './screens/EmailScreen';
import ContactScreen from './screens/ContactScreen';
import RulesScreen from './screens/RulesScreen';
import BinanceScreen from './screens/BinanceScreen';
import BinancePayScreen from './screens/BinancePayScreen';
import ActionScreen from './screens/ActionScreen';
import AccessScreen from './screens/AcessScreen';
import MainActionScreen from './screens/MainActionScreen';
import React from 'react';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen
                options={{ headerShown: false}}
                name={'Login'}
                component={LoginScreen}
            />

            <Stack.Screen 
            options={{ headerShown: false}}
            name={'Home'} 
            component={HomeScreen} 
            />


            <Stack.Screen 
            options={{ headerShown: false}}
            name="MpesaScreen" 
            component={MpesaScreen} 
            />

            <Stack.Screen 
            options={{ headerShown: false}}
            name="RefundScreen" 
            component={RefundScreen} 
            />

            <Stack.Screen 
            options={{ headerShown: false}}
            name="EmailScreen" 
            component={EmailScreen} 
            />

            <Stack.Screen 
            options={{ headerShown: false}}
            name="ContactScreen" 
            component={ContactScreen} 
            />

            <Stack.Screen 
            options={{ headerShown: false}}
            name="RulesScreen" 
            component={RulesScreen}
             />

            <Stack.Screen 
            options={{ headerShown: false}}
            name="BinanceScreen" 
            component={BinanceScreen}
             />

             <Stack.Screen
            options={{ headerShown: false}}
            name="BinancePay"
            component={BinancePayScreen}
            />

            <Stack.Screen
            options={{ headerShown: false}}
            name="ActionScreen"
            component={ActionScreen}
            />

            <Stack.Screen
            options={{ headerShown: false}}
            name="AccessScreen"
            component={AccessScreen}
            />

           <Stack.Screen
            options={{ headerShown: false}}
            name="MainActionScreen"
            component={MainActionScreen}
            />

        </Stack.Navigator>
      </NavigationContainer>
     

  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
