//import liraries
import React, {Component} from 'react';
import {
  CART,
  FAVORİTES,
  HOMESCREEN,
  PROFİLE,
  TRENDYOLGO,
} from '../../utils/routes';
import {Home, Google, Heart, ShoppingCart, Profile} from 'iconsax-react-native';

// create a component
const TabIcon = ({name, size, color,focused}) => {
  switch (name) {
    case HOMESCREEN:
      return (
        <Home
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case TRENDYOLGO:
      return (
        <Google
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case FAVORİTES:
      return (
        <Heart
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case CART:
      return (
        <ShoppingCart
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    case PROFİLE:
      return (
        <Profile
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );
    default:
      return (
        <Home
          size={size}
          color={color}
          variant={focused ? 'Bold' : 'Outline'}
        />
      );

  }
};

export default TabIcon;
