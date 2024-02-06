import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import History from './src/screens/History';
import {PaperProvider} from 'react-native-paper';
import Drawer from './src/navigation/Drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigator from './src/navigation/BottomNavigator';
import SocketContextProvider from './src/redux/SocketContext';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <SocketContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="drawer"
            screenOptions={{headerShown: false}}>
            {/* <Stack.Screen name="bottom" component={BottomNavigator} /> */}
            <Stack.Screen name="drawer" component={Drawer} />
            {/* <History /> */}
          </Stack.Navigator>
        </NavigationContainer>
      </SocketContextProvider>
    </PaperProvider>
  );
}

function Temp() {
  return <Text style={{color: '#000'}}>temporary screen</Text>;
}
