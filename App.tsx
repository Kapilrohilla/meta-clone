import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import History from './src/screens/History';
import {PaperProvider} from 'react-native-paper';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
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
            component={Temp}
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
      </NavigationContainer>
    </PaperProvider>
  );
}

function Temp() {
  return (
    <>
      <Text style={{color: '#000'}}>temporary screen</Text>
    </>
  );
}
