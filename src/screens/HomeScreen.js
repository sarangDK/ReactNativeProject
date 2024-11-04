import React from "react";
import { Text, StyleSheet,View,Button,TouchableOpacity } from "react-native";

const HomeScreen = ({ props }) => { // props.navigation is destructured to navigation

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

      <TouchableOpacity 
        //onPress={() => console.log('List Pressed')}
        onPress={() => navigation.navigate('List')}
        >
        <Text>Go to List Demo</Text>    
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;

