import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from '../../../components/ui/Title';
import { TextInput } from 'react-native-paper';
import { useAuth } from '../../../hooks/useAuth';
import { useState } from 'react';
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { useEffect } from 'react';

const Pag3 = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const { logup } = useAuth();

  const handleLogup = () => {
    if (password !== confirmPassword) {
      alert('As senhas não coincidem');
      return;
    }

    if (name.length < 3) {
      alert('O nome deve ter pelo menos 3 caracteres');
      return;
    }

    if (password.length < 3) {
      alert('A senha deve ter pelo menos 3 caracteres');
      return;
    }

    logup({ name, password });
  };

  return (
    <View style={styles.container}>
      <View>
        <Title text="Vamos começar" />
        <Text>
          Agora que você conhece um pouco mais sobre o P-G, vamos começar a
          configurar sua conta. Para começar, você precisará criar uma senha
        </Text>
      </View>

      <View style={styles.form}>
        <TextInput
          onChangeText={text => setName(text)}
          value={name}
          label="Nome"
        />
        <TextInput
          onChangeText={text => setPassword(text)}
          value={password}
          secureTextEntry
          label="Senha"
        />
        <TextInput
          onChangeText={text => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry
          label="Confirmar Senha"
        />
      </View>

      <TouchableOpacity onPress={handleLogup} style={[styles.button]}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Criar Senha</Text>
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: verticalScale(50),
  },
  form: {
    marginVertical: verticalScale(20),
    flexDirection: 'column',
    rowGap: verticalScale(20),
  },
  button: {
    backgroundColor: '#807DFB',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: verticalScale(20),
    left: 50,
    transform: [{ translateX: -50 }],
    width: '100%',
  },
});

export default Pag3;
