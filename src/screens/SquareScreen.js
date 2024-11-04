import React, { useReducer } from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer	=(state, action) => { // 1. state : object to change    2.action: how to change the object
		// state === { red: number, green: number, blue: number }
		// action === { type: 'change_red' || 'change_green' || 'change_blue', payload: 15 || -15 }

		// NOTE: never modify state directly!!
		// we ALWAYS return a new object to represent the new state!!
		switch (action.type) {
			case 'change_red':
				return state.red + action.payload > 255 || state.red + action.payload < 0	? state // return the same state object
				: { ...state, red: state.red + action.payload }; // 1. brand new object  2. take all the properties of state object  3. "override" the red property
			case 'change_green':
				return state.green + action.payload > 255 || state.green + action.payload < 0	? state 
				: { ...state, green: state.green + action.payload }; 
			case 'change_blue':
				return state.blue + action.payload > 255 || state.blue + action.payload < 0	? state 
				: { ...state, blue: state.blue + action.payload }; 
			default:
				return state;
		}
};

const SquareScreen = () => {
	const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
	const {red, green, blue} = state; // destructuring
	// console.log(state);	// {red: 0, green: 0, blue: 0}

	return (
		<View>
			<ColorCounter color="Red"
				onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREMENT })}
				onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })}
			/>
			<ColorCounter color="Blue"
				onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREMENT }) }
				onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })}
			/>
			<ColorCounter color="Green"
				onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREMENT })}
				onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })}
			/>

			<View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
		</View>
	);
};

const styles = StyleSheet.create({

});

export default SquareScreen; 