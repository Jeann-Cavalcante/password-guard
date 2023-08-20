import { StyleSheet, View, Text, Button } from "react-native";
import PagerView from "react-native-pager-view";
import Pag1 from "./components/pag1";
import { useRef, useState } from "react";
import Pag2 from "./components/pag2";
import Pag3 from "./components/pag3";

const Onboarding = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pagerRef = useRef(null);

  const handleNextPage = () => {
    pagerRef.current.setPage(currentPage + 1);

    console.log(currentPage);
  };

  return (
    <PagerView
      ref={pagerRef}
      onPageSelected={(event) => setCurrentPage(event.nativeEvent.position)}
      style={styles.pagerView}
      initialPage={1}
    >
      <View key="1">
        <Pag1 handleNextPage={handleNextPage} />
      </View>
      <View key="2">
        <Pag2 handleNextPage={handleNextPage} />
      </View>
      <View key="3">
        <Pag3 />
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
    backgroundColor: "transparent",
  },
});

export default Onboarding;
