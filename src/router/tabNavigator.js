import * as React from 'react';
import {Pressable, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CART,
  FAVORİTES,
  HOMESCREEN,
  NOTICE,
  NOTIFICATIONS,
  PROFİLE,
  TRENDYOLGO,
} from '../utils/routes';
import HomeScreen from '../screens/home';
import TrendyolGo from '../screens/trendyolGo';

import Profile from '../screens/profile';
import Favorites from '../screens/favorites';
import TabIcon from '../components/router/tabIcon';
import appColors from '../theme/colors';
import { Notification, Sms } from 'iconsax-react-native';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route,navigation}) => ({
        tabBarIcon: ({focused, color, size}) => {
          return (
            <TabIcon
              name={route.name}
              size={size}
              color={color}
              focused={focused}
            />
          );
        },
        headerRight: (props) => (
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Pressable onPress={() =>navigation.navigate(NOTICE)} style={{marginHorizontal:5}}>
              <Text>
              <Sms size="28" color={appColors.BLACK}/>
              </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate(NOTIFICATIONS) } style={{marginHorizontal:5}}>
              <Text>
              <Notification size="28" color={appColors.BLACK}/>
              </Text>
            </Pressable>
          </View>
        ),
        tabBarActiveTintColor: appColors.PRİMARY,
        tabBarInactiveTintColor: appColors.GRAY,
      })}>
      <Tab.Screen name={HOMESCREEN} component={HomeScreen} />
      <Tab.Screen name={TRENDYOLGO} component={TrendyolGo} />
      <Tab.Screen name={FAVORİTES} component={Favorites} />
      <Tab.Screen name={CART} component={Profile} />
      <Tab.Screen name={PROFİLE} component={Profile} />
    </Tab.Navigator>
  );
}
