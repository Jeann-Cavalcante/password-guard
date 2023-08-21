import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Onboarding from '../pages/Onboarding';
import Login from '../pages/Login';
import { useAuth } from '../hooks/useAuth';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useCallback, useEffect } from 'react';
import { AppState } from 'react-native';

const Stack = createStackNavigator();

function Routes() {
  const [timeAway, setTimeAway] = useState(0);

  const { onboarding, isAuthenticated, logout } = useAuth();
  console.log(onboarding, isAuthenticated);

  const handleAppStateChange = nextAppState => {
    if (nextAppState === 'background') {
      console.log('O aplicativo está em segundo plano.');
      // Faça o que for necessário quando o aplicativo estiver em segundo plano.
    }
  };

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#fff' },
        }}
      >
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
