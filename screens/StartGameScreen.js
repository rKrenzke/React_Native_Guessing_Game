import { TextInput, StyleSheet, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        //these next properties are not relevant for this app, but it's important to be aware of these properties for better UX when working with input fields
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttonWrapper}>
        <PrimaryButton>Reset</PrimaryButton>
        <PrimaryButton>Confirm</PrimaryButton>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  buttonWrapper: {
    flexDirection: "row",
  },
  inputWrapper: {
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
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
  numberInput: {
    height: 50,
    width: 70,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
});
