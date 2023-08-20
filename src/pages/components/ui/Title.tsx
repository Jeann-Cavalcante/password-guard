import { StyleSheet, Text } from "react-native";
import { moderateScale } from "react-native-size-matters";

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps) => {
  return <Text style={styles.title}>{text}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "BebasNeue-Regular",
    fontSize: moderateScale(40),
    fontWeight: "bold",
  },
});

export default Title;
