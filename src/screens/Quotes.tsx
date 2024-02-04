import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OctoIcons from 'react-native-vector-icons/Octicons';
import QuotesCard from '../components/QuotesCart';

export default function Quotes() {
  return (
    <View style={{flex: 1, backgroundColor: '#0f1821'}}>
      <QuotesTopBar />
      <ScrollView>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(() => (
          <QuotesCard />
        ))}
      </ScrollView>
    </View>
  );
}

function QuotesTopBar() {
  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <MaterialIcons name="menu" size={25} color="#fff" />
        <Text style={{color: '#fff', fontSize: 16, fontWeight: '600'}}>
          Trade
        </Text>
      </View>
      <View style={{flexDirection: 'row', gap: 30, alignItems: 'center'}}>
        <TouchableOpacity>
          <OctoIcons name="plus" color={'#ffffffaa'} size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <OctoIcons name="pencil" color={'#ffffffaa'} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
