import { Text, StyleSheet } from "react-native";

import Colors from "../../utilities/colors";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#cccccc",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "#cccccc",
    padding: 12,
  },
});
