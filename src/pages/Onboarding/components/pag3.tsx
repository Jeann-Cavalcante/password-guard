import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Title from "../../components/ui/Title";
import { TextInput } from "react-native-paper";

const Pag3 = () => {
  return (
    <View>
      <Title text="Vamos começar" />
      <Text>
        Agora que você conhece um pouco mais sobre o P-G, vamos começar a
        configurar sua conta. Para começar, você precisará criar uma senha
      </Text>

      <View style={styles.form}>
        <TextInput label="Senha" />
        <TextInput label="Confirmar Senha" />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text>Criar Senha</Text>
      </TouchableOpacity>
    </View>
  );
};

export const styles = StyleSheet.create({
  form: {
    marginVertical: 20,
    flexDirection: "column",
    rowGap: 20,
  },
  button: {
    backgroundColor: "#ff2400",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Pag3;
