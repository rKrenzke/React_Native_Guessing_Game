import { View, StyleSheet } from "react-native";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 14,
    padding: 16,
    backgroundColor: "#3b012f",
    borderRadius: 8,
    //creating shadow in android
    elevation: 30,
    //creating shadow in iOS
    shadowColor: "black",
    shadowOffset: { width: 6, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
});
