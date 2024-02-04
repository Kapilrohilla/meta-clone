import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import History from '../screens/History';
import Trade from '../screens/Trade';
import Quotes from '../screens/Quotes';
import Settings from '../components/Settings';
import AccountSetup from '../screens/AccountSetup/AccountSetup';
import BrokerInformation from '../screens/AccountSetup/BrokerInformation';
import Brokers from '../screens/AccountSetup/Brokers';
import Certificate from '../screens/AccountSetup/Certificate';
import Mailbox from '../screens/Mailbox';
import Message from '../screens/Message';

const Tab = createBottomTabNavigator();
export default function BottomNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Quotes"
        component={Quotes}
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
        component={Message}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Accountsetup"
        component={AccountSetup}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="BrokerInformation"
        component={BrokerInformation}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Brokers"
        component={Brokers}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Certificate"
        component={Certificate}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Mailbox"
        component={Mailbox}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}
function Temp() {
  return <Text style={{color: '#000'}}>temporary screen</Text>;
}
