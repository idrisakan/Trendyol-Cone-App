//import liraries
import React, {Component, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import screenStyle from '../../styles/screenStyles';
import {useDispatch, useSelector} from 'react-redux';
import {getProductInfo} from '../../store/actions/productsActions';
import Spinner from '../../components/ui/spinner';
import {screenHeight, screenWidth} from '../../utils/constans';
import appColors from '../../theme/colors';
import {Star} from 'iconsax-react-native';
import {convertPrice} from '../../utils/functions';
import Button from '../../components/ui/button';

// create a component
const ProductDetail = ({route}) => {
  const productId = route?.params?.productId;
  const {productInfo, pendingDetail} = useSelector(state => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getProductInfo({
        id: productId,
      }),
    );
  }, []);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: appColors.WHITE}}>
      <View style={screenStyle.container}>
        {pendingDetail ? (
          <Spinner />
        ) : (
          <View style={styles.container}>
            <ScrollView>
              <Image source={{uri: productInfo.image}} style={styles.image} />
              <Text style={styles.title}>{productInfo?.title}</Text>
              <Text style={styles.category}>{productInfo?.category}</Text>
              <View style={styles.rateContainer}>
                <Star size={25} color={appColors.YELLOW} variant="Bold" />
                <Text style={styles.rate}>{productInfo?.rating?.rate}</Text>
              </View>
              <Text style={styles.description}>{productInfo?.description}</Text>
            </ScrollView>
          </View>
        )}
        <View style={styles.infoContainer}>
          <View style={{flex: 1, paddingLeft: 10}}>
            <Text style={styles.price}>{convertPrice(productInfo.price)}</Text>
            <Text style={styles.kargoText}>Kargo Bedava</Text>
          </View>
          <View style={{flex: 3, flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
            <Button title='Şimdi Al' buttonType='outline'/>
            <Button title='Sepette Ekle' buttonType='flat'/>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {flex: 1, padding: 5},
  image: {
    width: screenWidth,
    height: screenHeight * 0.3,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
  },
  category: {
    fontSize: 16,
    fontWeight: 500,
    color: appColors.GRAY,
  },
  rateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  price: {
    fontSize: 18,
    fontWeight: '500',
    color: appColors.PRİMARY,
  },
  rate: {
    fontSize: 16,
  },
  favoriteContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: appColors.SOFTGRAY,
    paddingVertical: 10,
  },
  kargoText: {
    fontSize: 12,
    color: appColors.GREEN,
  },
});

export default ProductDetail;
