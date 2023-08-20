import { View } from "react-native";
import LottieView from "lottie-react-native";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const SplashScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <LottieView
        source={require("../../../assets/pass.json")}
        loop
        autoPlay
        resizeMode="contain"
        style={{
          width: scale(800),
          height: verticalScale(800),
        }}
      />
    </View>
  );
};

export default SplashScreen;
