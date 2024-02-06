import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OctoIcons from 'react-native-vector-icons/Octicons';
import TradeCard from '../components/TradeCard';

export default function Trade() {
  const [tradeData, setTradeData] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    var myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliYTdhMTRiNGQyZmEzMDU4ZDM5ZWMiLCJpYXQiOjE3MDcxNTU1ODIsImV4cCI6MTcwNzc2MDM4Mn0.sicDBl7i-7fAk4WADlwUr4rvgKwKj6FGIfM1Q7QP1HI',
    );

    var requestOptions = {
      method: 'GET',
      signal,
      headers: myHeaders,
      redirect: 'follow',
    };
    //@ts-ignore
    fetch('http://65.0.59.137:8080/get-positions', requestOptions)
      .then(response => response.json())
      .then(result => {
        const positions = result?.positions;
        setTradeData(positions);
      })
      .catch(error => console.log('error', error));

    return () => controller.abort();
  }, []);
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
        {/* {[1, 2, 3, 4, 5].map(() => {
          return <TradeCard />;
        })} */}
        {tradeData.map((position, index: number) => {
          return <TradeCard key={index} position={position} />;
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
