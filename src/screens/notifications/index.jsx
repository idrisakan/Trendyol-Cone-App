//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import appColors from '../../theme/colors';


// create a component
const Notifications = () => {
    return (
        <View style={styles.container}>
            <Text>Notification</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.WHITE,
    },
});

//make this component available to the app
export default Notifications;
