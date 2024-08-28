//import liraries
import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import appColors from '../theme/colors';
import WidgetTitle from '../components/widgets/widgetTitle';
import {useDispatch, useSelector} from 'react-redux';
import ProductItem from '../components/products/productItem';
import {getProducts} from '../store/actions/productsActions';

// create a component
const ForYou = ({item}) => {
  const {forYouProducts} = useSelector(state => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getProducts({
        
        category: "women's clothing",
      }),
    );
  }, []);

  return (
    <View style={styles.container}>
      <WidgetTitle
        title={item.title}
        seeAll={item.seeAll}
        category="women's clothing"
      />
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          alignContent: 'center',
        }}
        horizontal
        data={forYouProducts}
        renderItem={({item}) => (
          <ProductItem product={item} category="women's clothing" />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: appColors.WHITE,
  },
});

export default ForYou;
