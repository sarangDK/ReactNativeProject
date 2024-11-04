import React, {useState} from "react"; // React hook : react built-in function : userXYZ
import { Text, StyleSheet,View, Button } from "react-native";

const CounterScreen = () => { // props.navigation is destructured to navigation
  // NB: does not work. that is why we will have use useState
	// let counter = 0;
	const [counter, setCounter] = useState(0); // destructuring the array returned by useState
	const [str, setStr] = useState(''); // destructuring the array returned by useState

  return (
    <View>
      <Button	title="Increase" onPress={() => {
				// counter++;
				// console.log(counter);
				setCounter(counter + 1);
				setStr("Korea")
			}} />
			<Button	title="Decrease" onPress={() => {
				// counter--;
				// console.log(counter);
				setCounter(counter - 1);
				setStr("Canada")

			}} />
      <Text>Current Count: {counter}</Text>
			<Text>test string: {str}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default CounterScreen;

