import { Button, StyleSheet, Text, View } from "react-native";
import Title from "../../components/ui/Title";
import { moderateScale } from "react-native-size-matters";

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

export default pag1;
