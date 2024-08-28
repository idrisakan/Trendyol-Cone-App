import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  NOTICE,
  NOTIFICATIONS,
  PRODUCTDETAIL,
  PRODUCTS,
  TABMENU,
} from '../utils/routes';
import TabNavigator from './tabNavigator';
import Notice from '../screens/notice';
import Notifications from '../screens/notifications';
import appColors from '../theme/colors';
import Products from '../screens/products';
import ProductDetail from '../screens/products/productDetail';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Geri',
        headerTintColor: appColors.BLACK,
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={TABMENU}
        component={TabNavigator}
      />
      <Stack.Screen
        options={{}}
        name={NOTIFICATIONS}
        component={Notifications}
      />
      <Stack.Screen options={{}} name={PRODUCTS} component={Products} />
      <Stack.Screen options={{}} name={NOTICE} component={Notice} />
      <Stack.Screen
        options={{}}
        name={PRODUCTDETAIL}
        component={ProductDetail}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
