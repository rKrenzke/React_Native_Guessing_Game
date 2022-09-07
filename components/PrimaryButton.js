import { View, Text, Pressable, StyleSheet } from "react-native";
const PrimaryButton = ({ children }) => {
  function pressHandler() {
    console.log("Pressed!");
  }

  return (
    <View style={styles.wrapper}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonContainer]
            : styles.buttonContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#af0459" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderRadius: 20,
    margin: 4,
    overflow: "hidden",
  },
  buttonContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2, //android-only
  },
  buttonText: {
    color: "#f4f4eb",
    textAlign: "center",
  },
  // Dedicated styling for iOS
  pressed: {
    opacity: 0.75,
  },
});
