import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {

	const [name, setName] = useState(''); // name is the state variable and setName is the function to update the state variable
	const [password, setPassword] = useState('');
	return (
		<View>
			<TextInput
				style={styles.input}
				autoCapitalize="none"
				autoCorrect={false}
				value={name}
				onChangeText={(newValue) => {
					setName(newValue);
				}}
			/>
			<Text>Your name is: {name}</Text>
			<Text>Enter Password: </Text>
			<TextInput
				style={styles.input}
				autoCapitalize="none"
				autoCorrect={false}
				value={password}
				onChangeText={(newValue) => {
					setPassword(newValue);
				}}
			/>
			{password.length < 5 ? <Text>Password must be longer than 5 characters</Text> : null}
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		margin: 15,
		padding: 10,
		borderColor: "black",
		borderWidth: 1,
	},
});

export default TextScreen;

