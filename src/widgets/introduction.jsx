//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import {useNavigation} from '@react-navigation/native'
import { PRODUCTS } from '../utils/routes';

// create a component
const Introduction = ({item}) => {
    const navigation =useNavigation()
    return (
        <View style={styles.container}>
        
     <Pressable onPress={() => navigation.navigate(PRODUCTS)}>
     <Image source={{
        uri:'https://cdn.dsmcdn.com/ty1392/pimWidgetApi/mobile_20240630181158_2951046KadinMobile202406271803.jpg'
       }} style={{
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 20,
        borderRadius: 10,
       }}/>
     </Pressable>
      </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical:10
        
    },
});

//make this component available to the app
export default Introduction;
