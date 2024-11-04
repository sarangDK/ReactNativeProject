import React, {useState} from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => { 

	const[colors, setColors] = useState([]); // [red, green, blue
	console.log(colors);
  return (
    <View>
      <Button title="Add a Color" onPress={() => {
				setColors([...colors, randomRgb()]) // brand new array
			}} />
			{/* Point: unless further commented, useState function call trigger whole component is "re"-rendered */}
      {/* <View style={{ height: 100, width: 100, backgroundColor: randomRgb() }} /> */}

			<FlatList
				keyExtractor={(item) => item}
				data={colors}
				renderItem={({ item }) => {
					return <View style={{ height: 100, width: 100, backgroundColor: item }} />;
				}}
			/>
    </View>
  );
};

const randomRgb = () => {  
    const red = Math.floor(Math.random() * 256); // 0-255
    const green = Math.floor(Math.random() * 256); // 0-255
    const blue = Math.floor(Math.random() * 256); // 0-255
    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  
});

export default ColorScreen; 