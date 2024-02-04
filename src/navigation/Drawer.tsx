// /*
import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const DrawerNav = createDrawerNavigator();
export default function Drawer() {
  return (
    <DrawerNav.Navigator>
      <DrawerNav.Screen name="account" component={Temp} />
      <DrawerNav.Screen name="trade" component={Temp} />
      <DrawerNav.Screen name="news" component={Temp} />
      <DrawerNav.Screen name="mailbox" component={Temp} />
      <DrawerNav.Screen name="journal" component={Temp} />
      <DrawerNav.Screen name="settings" component={Temp} />
      <DrawerNav.Screen name="userguide" component={Temp} />
      <DrawerNav.Screen name="about" component={Temp} />
    </DrawerNav.Navigator>
  );
}

function Temp() {
  return <></>;
}
// */
