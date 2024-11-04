import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => { // props.navigation is destructured to navigation

  // console.log(props.navigation);

  return (
    <View>
      <Text style={styles.text}>Hi!!!!! There</Text>
      <Button
        title="Go to Components Demo"
        // onPress={() => console.log("Button pressed")}
        onPress={() => navigation.navigate('Components')}
      />

      <Button
        title="Go to List Demo"
        // onPress={() => console.log("Button pressed")}
        onPress={() => navigation.navigate('List')}
      />

      <Button
        title="Go to Image Demo"
        // onPress={() => console.log("Button pressed")}
        onPress={() => navigation.navigate('Image')}
      />

      <Button
        title="Go to Counter Demo"
        // onPress={() => console.log("Button pressed")}
        onPress={() => navigation.navigate('Counter')}
      /> 

      <Button
        title="Go to Color Demo"
        // onPress={() => console.log("Button pressed")}
        onPress={() => navigation.navigate('Color')}
      />  
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

