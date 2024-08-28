import React, {Component} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setCategory} from '../../store/slice/categoriesSlice';
import appColors from '../../theme/colors';
import {screenHeight, screenWidth} from '../../utils/constans';

const CategoryItem = ({category}) => {
  const dispatch = useDispatch();
  const {selectedCategory} = useSelector(state => state.categories);
  return (
    <TouchableOpacity
      onPress={() => dispatch(setCategory(category))}
      style={[
        styles.container,
        selectedCategory == category
          ? styles.activeCategoryContainer
          : styles.inactiveCategoryContainer,
      ]}>
      <Text
        style={
          selectedCategory == category
            ? styles.activeTitle
            : styles.inactiveTitle
        }>
        {category}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    borderWidth: 0.5,
    marginHorizontal: 5,
    maxHeight: screenHeight * 0.04,
    maxWidth: screenWidth* 0.6,
  },
  activeCategoryContainer: {
    backgroundColor: appColors.PRİMARY,
    borderColor: appColors.PRİMARY,

    borderRadius: 100,
    padding: 10,
  },
  inactiveCategoryContainer: {
    backgroundColor: appColors.WHITE,
  },
  activeTitle: {
    color: appColors.WHITE,
    fontWeight: '500',
  },
  inactiveTitle: {
    color: appColors.BLACK,
  },
});

export default CategoryItem;
