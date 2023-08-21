import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { useAuth } from '../../hooks/useAuth';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [password, setPassword] = useState('');

  const { login } = useAuth();

  const handleLogin = () => {
    if (password.length < 3) {
      alert('A senha deve ter pelo menos 3 caracteres');
      return;
    }
    login(password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View>
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder="Digite sua senha"
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.btn}>
          <Text style={{ color: 'white' }}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: verticalScale(50),
  },
  title: {
    fontFamily: 'BebasNeue-Regular',
    fontSize: moderateScale(40),
    fontWeight: 'bold',
    paddingBottom: verticalScale(20),
  },
  input: {
    height: verticalScale(50),
    marginVertical: verticalScale(12),
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: '#807DFB',
  },
  btn: {
    backgroundColor: '#807DFB',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
