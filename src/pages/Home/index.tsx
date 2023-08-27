import { Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import SplashScreen from "../SplashScreen";

const Home = () => {
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <View style={{ flex: 1 }}>
      <Text>Home</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
      <SplashScreen />
    </View>
  );
};

export default Home;
