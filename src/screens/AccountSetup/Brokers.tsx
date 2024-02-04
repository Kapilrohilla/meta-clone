import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import IonicIcons from 'react-native-vector-icons/Ionicons';
// import {TextInput} from 'react-native-gesture-handler';

export default function Brokers() {
  const navigation = useNavigation();
  const [broker, setBroker] = useState('');
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={{flex: 1, backgroundColor: '#0f1821'}}>
      <View style={styles.topBar}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              justifyContent: 'space-between',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <MaterialIcon
              name="arrow-back"
              size={25}
              color="#fff"
              onPress={handleGoBack}
            />
            <Text
              style={{
                fontSize: 18,
                color: '#fff',
                fontFamily: 'Inter-SemiBold',
                fontWeight: '600',
                marginLeft: 10,
              }}>
              Brokers
            </Text>
          </TouchableOpacity>
        </View>
        <IonicIcons name="qr-code" size={20} color="#fff" />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
          paddingHorizontal: 10,
        }}>
        <IonicIcons
          style={{marginLeft: 10}}
          name="search"
          size={20}
          color={'#fff'}
        />
        <TextInput
          value={broker}
          placeholder="Find Broker"
          placeholderTextColor={'#808080'}
          style={{
            fontSize: 18,
            borderBottomColor: '#ccc',
            borderBottomWidth: 0.5,
            paddingVertical: 5,
            flex: 1,
          }}
          onChangeText={newText => setBroker(newText)}
        />
      </View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row', gap: 15, alignItems: 'center'}}>
            <IonicIcons name="logo-web-component" size={35} color={'#fff'} />
            <View>
              <Text style={{color: '#fff', fontWeight: '600'}}>
                MetaQuotes Software Corp.
              </Text>
              <Text style={{color: '#508cd8'}}>MetaQuotes</Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => {
              // @ts-ignore
              navigation.navigate('BrokerInfo');
            }}>
            <IonicIcons
              name="information-circle-outline"
              size={25}
              color="#808080"
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Bottom button can't fint broker */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#293543',
          width: '100%',
          padding: 15,
        }}>
        <Text
          style={{
            color: '#fff',
            textTransform: 'uppercase',
            textAlign: 'center',
            fontWeight: '700',
          }}>
          Can't Find your Broker?
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
});
