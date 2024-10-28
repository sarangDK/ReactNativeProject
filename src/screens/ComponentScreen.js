import React from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentScreen = () => {

    const greeting = ['asdf',' vcx'];
    const greeting2 = <Text>Hi there!</Text>;

    return (
        <View>
            <Text style={styles.textStyle}>This!!!!! is the components screen</Text>
            <Text style={styles.subHeaderStyle}>{greeting}</Text>
            {greeting2}
        </View>
    );
};


const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    },
    subHeaderStyle: {
        fontSize: 40
    }
});

export default ComponentScreen;