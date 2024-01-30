import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Screen name="Quotes" component={Temp} />
      <Tab.Screen name="Charts" component={Temp} />
      <Tab.Screen name="Trade" component={Temp} />
      <Tab.Screen name="History" component={Temp} />
      <Tab.Screen name="Messages" component={Temp} />
    </NavigationContainer>
  );
}

function Temp() {
  return (
    <>
      <Text style={{color: '#000'}}>temporary screen</Text>
    </>
  );
}
