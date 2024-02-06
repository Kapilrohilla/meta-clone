// /*
import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomNavigator from './BottomNavigator';
import Settings from '../components/Settings';
import AccountSetup from '../screens/AccountSetup/AccountSetup';
import BrokerInformation from '../screens/AccountSetup/BrokerInformation';
import Brokers from '../screens/AccountSetup/Brokers';
import Certificate from '../screens/AccountSetup/Certificate';
import Mailbox from '../screens/Mailbox';

const DrawerNav = createDrawerNavigator();
export default function Drawer() {
  return (
    <DrawerNav.Navigator initialRouteName="">
      <DrawerNav.Screen
        name="bottomTabBar"
        component={BottomNavigator}
        options={{headerShown: false}}
      />
      <DrawerNav.Screen
        name="Settings"
        component={Settings}
        options={{headerShown: false}}
      />
      <DrawerNav.Screen
        name="Accountsetup"
        component={AccountSetup}
        options={{headerShown: false}}
      />
      <DrawerNav.Screen
        name="BrokerInformation"
        component={BrokerInformation}
        options={{headerShown: false}}
      />
      <DrawerNav.Screen
        name="Brokers"
        component={Brokers}
        options={{headerShown: false}}
      />
      <DrawerNav.Screen
        name="Certificate"
        component={Certificate}
        options={{headerShown: false}}
      />
      <DrawerNav.Screen
        name="Mailbox"
        component={Mailbox}
        options={{headerShown: false}}
      />
      {/* <DrawerNav.Screen name="account" component={Temp} />
      <DrawerNav.Screen name="trade" component={Temp} />
      <DrawerNav.Screen name="news" component={Temp} />
      <DrawerNav.Screen name="mailbox" component={Temp} />
      <DrawerNav.Screen name="journal" component={Temp} />
      <DrawerNav.Screen name="settings" component={Temp} />
      <DrawerNav.Screen name="userguide" component={Temp} />
      <DrawerNav.Screen name="about" component={Temp} /> */}
    </DrawerNav.Navigator>
  );
}

function Temp() {
  return <></>;
}
// */
