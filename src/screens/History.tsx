import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import OctoIcons from 'react-native-vector-icons/Octicons';
import {FlashList} from '@shopify/flash-list';
import HistoryCard from '../components/HistoryCard';
import {useIsFocused} from '@react-navigation/native';

export default function History() {
  const [selectedTab, setSelectedTab] = useState(1);
  const [data, setData] = useState([]);
  const isFocused = useIsFocused();

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliYTdhMTRiNGQyZmEzMDU4ZDM5ZWMiLCJpYXQiOjE3MDY3NzUzMDMsImV4cCI6MTcwNzM4MDEwM30.nzi54MF287yd_oZRMnJJldbNzX8MAvj3rLEGJnSz7Rc';
  // fetch positions data
  const fetchPositionData = (signal: any) => {
    fetch('http://65.0.59.137:8080/get-closed-positions', {
      signal,
      method: 'GET',
      headers: {
        Authorization: token,
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(r => r.json())
      .then(data => setData(data))
      .catch(err => {
        console.log(err.message);
      });
  };
  const fetchOrderData = (signal: any) => {
    fetch(`http://65.0.59.137:8080/get-user-orders`, {
      signal,
      method: 'GET',
      headers: {
        Authorization: token,
        Accept: 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(r => r.json())
      .then(data => {
        console.log(data, 'order api data');
        setData(data);
      })
      .catch(err => {
        console.log(err.message);
      });
  };
  console.log(data, '<< -- data');
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    if (selectedTab === 1) {
      fetchPositionData(signal);
    } else if (selectedTab === 2) {
      fetchOrderData(signal);
    }
    return () => {
      controller.abort();
      console.log('unsubscribbed');
    };
  }, [isFocused, selectedTab]);

  return (
    <View style={{flex: 1, backgroundColor: '#0f1821'}}>
      <HistoryTopBar />
      {/* topMenus */}
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity
          onPress={() => setSelectedTab(1)}
          style={{
            paddingVertical: 10,
            flex: 1,
            borderBottomColor: selectedTab === 1 ? '#3c6dac' : '',
            borderBottomWidth: selectedTab === 1 ? 3 : 0,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontWeight: '600',
            }}>
            POSITIONS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab(2)}
          style={{
            paddingVertical: 10,
            flex: 1,
            borderBottomColor: selectedTab === 2 ? '#3c6dac' : '',
            borderBottomWidth: selectedTab === 2 ? 3 : 0,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontWeight: '600',
            }}>
            ORDERS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setSelectedTab(3)}
          style={{
            paddingVertical: 10,
            flex: 1,
            borderBottomColor: selectedTab === 3 ? '#3c6dac' : '',
            borderBottomWidth: selectedTab === 3 ? 3 : 0,
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontWeight: '600',
            }}>
            DEALS
          </Text>
        </TouchableOpacity>
      </View>

      {(selectedTab === 1 || selectedTab === 3) && (
        <>
          <View
            style={{
              margin: 10,
              gap: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={{color: '#fff', fontWeight: '800'}}>Profit</Text>
              <Text style={{color: '#3c6dac', fontWeight: '800'}}>0.01</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#fff', fontWeight: '800'}}>Deposit</Text>
              <Text style={{color: '#fff', fontWeight: '800'}}>10,000.00</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#fff', fontWeight: '800'}}>Swap</Text>
              <Text style={{color: '#fff', fontWeight: '800'}}>00</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#fff', fontWeight: '800'}}>Commission</Text>
              <Text style={{color: '#fff', fontWeight: '800'}}>00</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#fff', fontWeight: '800'}}>Balance</Text>
              <Text style={{color: '#fff', fontWeight: '800'}}>10,000.01</Text>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 10,
              borderTopWidth: 1,
              borderTopColor: '#ccc',
              paddingVertical: 5,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text style={{color: '#fff', fontWeight: '800'}}>Balance</Text>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{color: '#fff', opacity: 0.6}}>
                2024.01.30 16:05:15
              </Text>
              <Text style={{color: '#3c6dac', fontWeight: '800'}}>
                10 000.00
              </Text>
            </View>
          </View>
        </>
      )}
      {selectedTab === 1 && (
        <>
          <FlashList
            data={data}
            renderItem={({item}) => (
              <HistoryCard type={'positions'} displayObj={item} />
            )}
            keyExtractor={(value, index) => index.toString()}
            estimatedItemSize={20}
          />
        </>
      )}
      {selectedTab === 2 && (
        <>
          <View
            style={{
              margin: 10,
              gap: 5,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#fff', fontWeight: '600'}}>Filled:</Text>
              <Text style={{color: '#fff', fontWeight: '600'}}>5</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#fff', fontWeight: '600'}}>Canceled:</Text>
              <Text style={{color: '#fff', fontWeight: '600'}}>5</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{color: '#fff', fontWeight: '600'}}>Total:</Text>
              <Text style={{color: '#fff', fontWeight: '600'}}>5</Text>
            </View>
          </View>
          <FlashList
            // data={[
            //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            //   20, 21,
            // ]}
            data={data}
            renderItem={({item}) => (
              <HistoryCard type={'orders'} displayObj={item} />
            )}
            // keyExtractor={({item}: any) => item?.id}
            estimatedItemSize={20}
          />
        </>
      )}
      {selectedTab === 3 && (
        <>
          <FlashList
            data={[
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21,
            ]}
            renderItem={({item}) => (
              <HistoryCard type={'deals'} displayObj={data[0]} />
            )}
            keyExtractor={value => value.toString()}
            estimatedItemSize={20}
          />
        </>
      )}
    </View>
  );
}

const HistoryTopBar = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        justifyContent: 'space-between',
        paddingHorizontal: 5,
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
        <TouchableOpacity>
          <MaterialIcons name="menu" size={20} color="#fff" />
        </TouchableOpacity>
        <View>
          <Text style={{fontSize: 12, fontWeight: '500', color: '#fff'}}>
            History
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              color: '#fff',
              opacity: 0.4,
            }}>
            All Symbols
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 20}}>
        <TouchableOpacity>
          <MaterialIcons name="currency-exchange" color={'#fff'} size={25} />
        </TouchableOpacity>
        <TouchableOpacity>
          <OctoIcons
            style={{transform: [{rotate: '90deg'}]}}
            name="arrow-switch"
            color={'#fff'}
            size={25}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcons name="calendar-month" color={'#fff'} size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
