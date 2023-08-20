import { Button, StyleSheet, Text, View } from "react-native";
import Title from "../../components/ui/Title";
import { moderateScale } from "react-native-size-matters";

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
      <Button title="Próxima Página" onPress={handleNextPage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
  },
  text: {
    fontFamily: "Poppins-Light",
    fontSize: moderateScale(14),
    fontWeight: "bold",
    lineHeight: 18,
    color: "#233",
    marginTop: moderateScale(30),
  },
});

export default Pag2;
