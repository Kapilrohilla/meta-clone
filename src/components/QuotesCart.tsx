import {View, Text, StatusBar} from 'react-native';
import React from 'react';

export default function QuotesCard() {
  const sellColor = '#ce262c';
  const buyColor = '#3c6dac';
  return (
    <>
      <StatusBar backgroundColor={'#0f1821'} />
      <View
        style={{
          paddingHorizontal: 15,
          paddingVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        {/* left */}
        <View>
          <View style={{flexDirection: 'row', gap: 4}}>
            <Text style={{color: '#ffffff66', fontWeight: '500', fontSize: 12}}>
              0
            </Text>
            <Text style={{color: sellColor, fontWeight: '500', fontSize: 12}}>
              -0.78%
            </Text>
          </View>
          <Text style={{color: '#fff', fontWeight: '700', fontSize: 16}}>
            EURUSD
          </Text>
          <View style={{flexDirection: 'row', gap: 10}}>
            <Text style={{fontSize: 12, color: '#ffffff66', fontWeight: '500'}}>
              23:58:51
            </Text>
            <Text style={{fontSize: 12, color: '#ffffff66', fontWeight: '500'}}>
              29
            </Text>
          </View>
        </View>
        {/* right */}
        <View style={{flexDirection: 'row', gap: 10}}>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <Text
                style={{fontSize: 15, fontWeight: '500', color: '#ffffff88'}}>
                1.07
              </Text>
              <Text
                style={{fontSize: 22, fontWeight: '700', color: '#ffffff88'}}>
                85
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  alignSelf: 'flex-start',
                  color: '#ffffff88',
                }}>
                8
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 12, color: '#ffffff88'}}>L: 1.23453</Text>
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
              <Text
                style={{fontSize: 15, fontWeight: '500', color: '#ffffff88'}}>
                1.07
              </Text>
              <Text
                style={{fontSize: 22, fontWeight: '700', color: '#ffffff88'}}>
                85
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: '500',
                  alignSelf: 'flex-start',
                  color: '#ffffff88',
                }}>
                8
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 12, color: '#ffffff88'}}>H: 1.23453</Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
}
