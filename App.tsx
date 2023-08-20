import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LottieView from "lottie-react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

export default function App() {
  return (
    <View style={styles.container}>
      <LottieView
        source={require("./assets/pass.json")}
        loop
        autoPlay
        resizeMode="contain"
        style={{
          width: scale(800),
          height: verticalScale(800),
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
