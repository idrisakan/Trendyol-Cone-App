//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import appColors from '../../theme/colors';
import {screenHeight, screenWidth} from '../../utils/constans';
import {Heart, Star} from 'iconsax-react-native';
import {convertPrice} from '../../utils/functions';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAIL} from '../../utils/routes';
// create a component
const ProductItem = ({product}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(PRODUCTDETAIL, {productId: product.id})
      }
      style={styles.container}>
      <Image style={styles.image} source={{uri: product.image}} />
      <Text numberOfLines={2} style={styles.title}>
        {product.title}
      </Text>
      <View style={styles.infoContainer}>
        <Text style={styles.price}>{convertPrice(product.price)}</Text>
        <View style={styles.rateContainer}>
          <Star size={20} color={appColors.YELLOW} variant="Bold" />
          <Text style={styles.rate}>{product.rating.rate}</Text>
        </View>
      </View>
      <View style={styles.favoriteContainer}>
        <Heart size={20} color={appColors.PRİMARY} variant="Outline" />
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: screenWidth / 2 - 20,
    backgroundColor: appColors.SOFTGRAY,
    margin: 3,
    padding: 8,

    borderRadius: 5,
    paddingVertical: 10,
  },
  image: {
    width: screenWidth / 2 - 20,
    height: screenHeight * 0.15,
    resizeMode: 'contain',
    alignSelf: 'center',
    backgroundColor: appColors.SOFTGRAY,
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 10,
  },
  description: {},
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 16,
    fontWeight: '500',
    color: appColors.PRİMARY,
  },
  rate: {
    fontSize: 12,
    fontWeight: '500',
  },
  favoriteContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

//make this component available to the app
export default ProductItem;
