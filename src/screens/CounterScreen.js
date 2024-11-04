import React, {useState} from "react";
import { Text, StyleSheet,View, Button } from "react-native";

const CounterScreen = () => { // props.navigation is destructured to navigation
  // NB: does not work. that is why we will have use useState
	// let counter = 0;
	const [counter, setCounter] = useState(0); // destructuring the array returned by useState


  return (
    <View>
      <Button	title="Increase" onPress={() => {
				// counter++;
				// console.log(counter);
				setCounter(counter + 1);
			}} />
			<Button	title="Decrease" onPress={() => {
				// counter--;
				// console.log(counter);
				setCounter(counter - 1);
			}} />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default CounterScreen;

