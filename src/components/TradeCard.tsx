import {
  View,
  Text,
  TouchableOpacity,
  Touchable,
  StyleSheet,
} from 'react-native';
import React, {useCallback, useContext, useState, memo} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {SocketContext} from '../redux/SocketContext';

export default memo(function TradeCard({position}: any) {
  const sellColor = '#ce262c';
  const buyColor = '#3c6dac';
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [socketData, setSocketData] = useState({});

  const socket = useContext(SocketContext);
  useFocusEffect(
    useCallback(() => {
      const handleNewMessage = (data: any) => {
        console.log('Mounting');
        const socketData = data?.newMessage;
        if (position.symbol === socketData.symbol) {
          setSocketData(socketData);
        }
      };
      socket.on('newMessage', handleNewMessage);

      return () => {
        console.log('unmounting');
        socket.off('newMessage', handleNewMessage);
      };
    }, []),
  );
  return (
    <TouchableOpacity
      onPress={() => setIsOpened(!isOpened)}
      style={{
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}>
      {/* top */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <View style={{flexDirection: 'row', alignItems: 'baseline', gap: 5}}>
            <Text style={{color: '#fff', fontWeight: '700'}}>
              {position.symbol},
            </Text>
            <Text style={{color: buyColor, fontWeight: '600'}}>buy 0.01</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 5}}>
            <Text style={{color: '#ffffffaa', fontWeight: '700'}}>
              {Number(position?.price).toFixed(4)} →{' '}
              {Number(socketData?.ask).toFixed(4)}
            </Text>
          </View>
        </View>
        <View>
          <Text style={{color: buyColor, fontWeight: '900', fontSize: 16}}>
            3.15
          </Text>
        </View>
      </View>
      {/* bottom */}
      {isOpened && (
        <View>
          <Text style={{color: '#ffffffaa', fontSize: 12, fontWeight: '400'}}>
            2024.02.02 14:32:40
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              gap: 10,
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={[styles.bottomText]}>S/L</Text>
                <Text style={[styles.bottomText]}>T/P</Text>
              </View>
              <View>
                <Text style={[styles.bottomText]}>-</Text>
                <Text style={[styles.bottomText]}>-</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <Text style={[styles.bottomText]}>Swap</Text>
                <Text style={[styles.bottomText]}></Text>
              </View>
              <View>
                <Text style={[styles.bottomText]}>0.00</Text>
                <Text style={[styles.bottomText]}>#ffffff55</Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  bottomText: {
    fontSize: 12,
    textAlign: 'right',
  },
});
