import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IonicIcons from 'react-native-vector-icons/Ionicons';
export default function Message() {
  return (
    <View style={{flex: 1, backgroundColor: '#0f1821'}}>
      {/* topbar */}
      <TopBar />
      <RegisterSigninBtns />
    </View>
  );
}

const TopBar = () => {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <MaterialIcons name="menu" size={25} color={'#ffffff77'} />
        <Text style={{color: '#fff', fontSize: 15}}>Messages</Text>
      </TouchableOpacity>
      <View>
        <TouchableOpacity></TouchableOpacity>
        <TouchableOpacity>
          <IonicIcons
            style={{marginLeft: 10}}
            name="search"
            size={20}
            color={'#fff'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const RegisterSigninBtns = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        gap: 20,
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 0,
        paddingBottom: 10,
      }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#3c6dac',
          flex: 2,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 15,
          borderRadius: 5,
        }}>
        <Text
          style={{
            color: '#fff',
            fontSize: 15,
            fontWeight: '800',
          }}>
          REGISTER
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#2c2c2c',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 15,
          borderRadius: 5,
        }}>
        <Text style={{color: '#3c6dac', fontSize: 15, fontWeight: '800'}}>
          SIGN IN
        </Text>
      </TouchableOpacity>
    </View>
  );
};
