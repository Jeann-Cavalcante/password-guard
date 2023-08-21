import { Text, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../hooks/useAuth';

const Home = () => {
  const { logout } = useAuth();
  const handleLogout = () => {
    logout();
  };
  return (
    <View>
      <Text>Home</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
