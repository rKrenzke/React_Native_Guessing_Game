import { useState } from "react";
import { TextInput, StyleSheet, View, Alert } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";

const StartGameScreen = (props) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText);
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Please enter a number between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetGame },
      ]);
      return;
    }

    props.startGame(enteredNumber);
  }

  function resetGame() {
    setEnteredNumber("");
  }

  return (
    <View style={styles.inputWrapper}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        //these next properties are not relevant for this app, but it's important to be aware of these properties for better UX when working with input fields
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={numberInputHandler}
        value={enteredNumber}
      />
      <View style={styles.buttonWrapper}>
        <PrimaryButton onPress={resetGame}>Reset</PrimaryButton>
        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
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
