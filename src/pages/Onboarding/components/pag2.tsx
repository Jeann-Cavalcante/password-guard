import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from '../../components/ui/Title';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const Pag2 = ({ handleNextPage }: any) => {
  return (
    <View style={styles.container}>
      <View>
        <Title text="Mantenha Suas Senhas Seguras" />
        <Text style={styles.text}>
          No mundo digital de hoje, senhas são a chave para sua privacidade e
          segurança. Através do P-G, você poderá armazenar suas senhas de forma
          criptografada e acessá-las somente quando necessário. Nossa plataforma
          utiliza medidas de segurança avançadas para proteger suas informações
          pessoais, garantindo que você possa navegar online com confiança.
        </Text>
      </View>
      <TouchableOpacity onPress={handleNextPage} style={styles.button}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>
          Próxima Página
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingBottom: verticalScale(50),
  },
  text: {
    fontFamily: 'Poppins-Light',
    fontSize: moderateScale(12),
    fontWeight: 'bold',
    lineHeight: 18,
    color: '#233',
    marginTop: moderateScale(30),
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

export default Pag2;
