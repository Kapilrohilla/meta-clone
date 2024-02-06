import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OctoIcons from 'react-native-vector-icons/Octicons';
import QuotesCard from '../components/QuotesCart';
import {useIsFocused} from '@react-navigation/native';

export default function Quotes() {
  const [watchlistData, setWatchlistData] = useState([]);
  const isFocuesd = useIsFocused();
  // console.log(watchlistData);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    var myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliYTdhMTRiNGQyZmEzMDU4ZDM5ZWMiLCJpYXQiOjE3MDcxNTA2NjgsImV4cCI6MTcwNzc1NTQ2OH0.YXyR6QQRjxwlco0DwUbj8_sVdwjMY2YTWWw7bgu8xFA',
    );

    var requestOptions = {
      method: 'GET',
      signal,
      headers: myHeaders,
      redirect: 'follow',
    };
    //@ts-ignore
    fetch('http://65.0.59.137:8080/get-watchlist-data', requestOptions)
      .then(response => response.json())
      .then(result => {
        setWatchlistData(result.message);
      })
      .catch(error => console.log('error', error));
    return () => {
      controller.abort();
    };
  }, [isFocuesd]);

  return (
    <View style={{flex: 1, backgroundColor: '#0f1821'}}>
      <QuotesTopBar />
      <ScrollView>
        {watchlistData.map(symbolData => (
          <QuotesCard quoteData={symbolData} />
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
