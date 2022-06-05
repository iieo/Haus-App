import { StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import Constants from "expo-constants";

import { WebView } from "react-native-webview";

export default function PumpTab({ navigation }: RootTabScreenProps<"TabOne">) {
  return (
    <WebView
      style={styles.container}
      source={{ uri: "http://192.168.178.58" }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
