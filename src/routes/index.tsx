import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Onboarding from '../pages/Onboarding';
import Login from '../pages/Login';
import { useAuth } from '../hooks/useAuth';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from '../pages/SplashScreen';

const Stack = createStackNavigator();

function Routes() {
  const { onboarding, isAuthenticated } = useAuth();
  const loading = false;
  console.log(loading);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#fff' },
        }}
      >
        {loading && (
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
        )}
        {!onboarding && (
          <Stack.Screen name="Onboarding" component={Onboarding} />
        )}
        {!isAuthenticated ? (
          <Stack.Screen name="Login" component={Login} />
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
