import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Title from '../../../components/ui/Title';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const pag1 = ({ handleNextPage }: any) => {
  return (
    <View style={styles.container}>
      <View>
        <Title text="Bem-vindo ao Password Guard" />
        <Text style={styles.text}>
          Estamos empolgados por você ter escolhido nosso aplicativo para
          ajudá-lo a manter suas senhas seguras e organizadas. Com P-G, você
          poderá gerenciar suas senhas de forma conveniente e protegida. Vamos
          começar sua jornada em direção à segurança digital!
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
    justifyContent: 'center',
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

export default pag1;
