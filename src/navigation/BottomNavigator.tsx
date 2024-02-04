import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import History from '../screens/History';
import Trade from '../screens/Trade';

const Tab = createBottomTabNavigator();
export default function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Quotes"
        component={Temp}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Charts"
        component={Temp}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Trade"
        component={Trade}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Messages"
        component={Temp}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
function Temp() {
  return <Text style={{color: '#000'}}>temporary screen</Text>;
}
