import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OctoIcons from 'react-native-vector-icons/Octicons';
import TradeCard from '../components/TradeCard';

export default function Trade() {
  return (
    <View style={{flex: 1, backgroundColor: '#0f1821'}}>
      <TradeTopbar />
      {/* balance section */}
      <View style={{paddingHorizontal: 15, paddingVertical: 10, gap: 10}}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: '#fff', fontWeight: '700'}}>Balance:</Text>
          <Text style={{color: '#fff', fontWeight: '700'}}>9999.60</Text>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: '#fff', fontWeight: '700'}}>Equity:</Text>
          <Text style={{color: '#fff', fontWeight: '700'}}>9999.60</Text>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: '#fff', fontWeight: '700'}}>Margin:</Text>
          <Text style={{color: '#fff', fontWeight: '700'}}>9999.60</Text>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: '#fff', fontWeight: '700'}}>Free Margin:</Text>
          <Text style={{color: '#fff', fontWeight: '700'}}>9999.60</Text>
        </View>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{color: '#fff', fontWeight: '700'}}>
            Margin Level(%):
          </Text>
          <Text style={{color: '#fff', fontWeight: '700'}}>9999.60</Text>
        </View>
      </View>
      <View style={{height: 1, backgroundColor: '#ffffff55'}} />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          paddingVertical: 7,
        }}>
        <Text style={{fontWeight: '700', color: '#ffffffaa'}}>Positions</Text>
        <Text style={{fontWeight: '700', color: '#ffffffaa'}}>. . .</Text>
      </View>
      <View style={{height: 1, backgroundColor: '#ffffff55'}} />
      <ScrollView>
        {[1, 2, 3, 4, 5].map(() => {
          return <TradeCard />;
        })}
      </ScrollView>
    </View>
  );
}

export function TradeTopbar() {
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
        <View>
          <Text style={{color: '#fff', fontSize: 12}}>Trade</Text>
          <Text style={{color: '#fff', opacity: 0.4, fontWeight: '600'}}>
            6.40 USD
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', gap: 30, alignItems: 'center'}}>
        <TouchableOpacity>
          <OctoIcons
            style={{transform: [{rotate: '90deg'}]}}
            name="arrow-switch"
            color={'#ffffffaa'}
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <OctoIcons
            style={{transform: [{rotate: '90deg'}]}}
            name="arrow-switch"
            color={'#ffffffaa'}
            size={25}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
