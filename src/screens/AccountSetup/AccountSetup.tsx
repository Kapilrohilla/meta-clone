import {useNavigation, DrawerActions} from '@react-navigation/native';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonicIcons from 'react-native-vector-icons/Ionicons';

export default function AccountSetup() {
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: '#0f1821', flex: 1}}>
      <View style={styles.topBar}>
        <View>
          <TouchableOpacity
            // onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
            onPress={() => navigation.goBack()}
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            {/* <Entypo name="menu" color={'#fff'} size={30} /> */}
            <MaterialIcon
              name="arrow-back"
              size={25}
              color="#fff"
              // onPress={handleGoBack}
            />
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                fontFamily: 'Inter-SemiBold',
                fontWeight: '600',
                marginLeft: 10,
              }}>
              Accounts
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', gap: 15}}>
          <MaterialIcon name="security" size={25} color={'#fff'} />
          <TouchableOpacity
            onPress={() => {
              // @ts-ignore
              navigation.navigate('accountCertificate');
            }}>
            <MaterialCommunityIcon name="certificate" size={25} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              // @ts-ignore
              navigation.navigate('accountBroker');
            }}>
            <Entypo name="plus" size={25} color="#fff" />
          </TouchableOpacity>
          <MaterialIcon name="more-vert" size={25} color={'#fff'} />
        </View>
      </View>
      <ScrollView style={{marginTop: 10}}>
        <AccountCard />
      </ScrollView>
    </View>
  );
}

const AccountCard = () => {
  const width = Dimensions.get('screen').width;
  return (
    <TouchableOpacity>
      <View
        style={{
          backgroundColor: '#293543',
          height: 300,
          width: width - 20,
          marginHorizontal: 10,
        }}>
        <View style={{marginTop: 40, alignItems: 'center'}}>
          <IonicIcons name="logo-web-component" size={50} color={'#fff'} />
          <Text
            style={{
              color: '#fff',
              fontSize: 18,
              fontWeight: '600',
              marginTop: 10,
            }}>
            MetaTrader 5 Android Demo
          </Text>
          <Text
            style={{
              color: '#4e80c1',
              fontSize: 14,
              fontWeight: '600',
              marginTop: 5,
            }}>
            MetaTrader 5 Android Demo
          </Text>
          <Text
            style={{
              fontSize: 15,
              paddingHorizontal: 60,
              textAlign: 'center',
              marginTop: 20,
            }}>
            77998909 - MetaQuotes-Demo Access Point EU 3, Hedge
          </Text>
          <Text
            style={{
              color: '#fff',
              fontWeight: '600',
              fontSize: 20,
              marginTop: 15,
            }}>
            9996.58 USD
          </Text>
          <View></View>
        </View>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <IonicIcons name="qr-code" size={20} color="#fff" />
          <IonicIcons name="notifications" size={20} color="#ccc" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
});
