import {
  View,
  Text,
  TouchableOpacity,
  Touchable,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';

export default function TradeCard() {
  const sellColor = '#ce262c';
  const buyColor = '#3c6dac';
  const [isOpened, setIsOpened] = useState<boolean>(false);
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
            <Text style={{color: '#fff', fontWeight: '700'}}>USDCNH,</Text>
            <Text style={{color: buyColor, fontWeight: '600'}}>buy 0.01</Text>
          </View>
          <View style={{flexDirection: 'row', gap: 5}}>
            <Text style={{color: '#ffffffaa', fontWeight: '700'}}>
              7.5432 → 6.3234
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
}

const styles = StyleSheet.create({
  bottomText: {
    fontSize: 12,
    textAlign: 'right',
  },
});
