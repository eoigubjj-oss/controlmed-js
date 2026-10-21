
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import VerifyEmailScreen from './src/app/screeens.js/EmailVerification.js';
import HomeScreen from './src/app/screeens.js/HomeScreen.js';
import IndexScreen from './src/app/screeens.js/index.js';
import InstituicaoScreen from './src/app/screeens.js/instituicao.js';
import LoginScreen from './src/app/screeens.js/LoginScreens.js';
import VerificationSucesso from './src/app/screeens.js/verificationsucesso.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="instituicao"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="Index"
          component={IndexScreen}
        />

        <Stack.Screen
          name="instituicao"
          component={InstituicaoScreen}
        />

        <Stack.Screen
          name="EmailVerification"
          component={VerifyEmailScreen}
        />

        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="VerificationSucesso"
          component={VerificationSucesso}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
