import React, { useEffect} from 'react';
import {View,StyleSheet, FlatList} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {getCategories} from '../store/actions/categoriActions';
import CategoryItem from '../components/widgets/categoryItem';
import { screenHeight } from '../utils/constans';

const Categories = ({item}) => {
  const {categories} = useSelector(state => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={categories}
        renderItem={({item}) => <CategoryItem category={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
 
    marginVertical: 15,
 
    maxHeight:screenHeight*0.043
  },
});

export default Categories;
