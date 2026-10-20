
import VerifyEmailScreen from './src/screens/screeens.js/EmailVerific.js';
import HomeScreen from './src/screens/screeens.js/HomeScreen.js';
import LoginScreen from './src/screens/screeens.js/LoginScreens.js';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        <Stack.Screen
          name="VerifyEmail"
          component={VerifyEmailScreen}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
