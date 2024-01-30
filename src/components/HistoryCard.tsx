import {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';

const HistoryCard = ({type}: {type: 'positions' | 'orders' | 'deals'}) => {
  const [opened, setOpened] = useState(false);
  return (
    <TouchableOpacity onPress={() => setOpened(!opened)}>
      <View
        style={{
          borderWidth: 1,
          borderBlockColor: '#ccc',
          padding: 5,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <View style={{flexDirection: 'row', gap: 3}}>
            <Text style={{color: '#fff', fontWeight: '600'}}>EURUSD</Text>
            <Text style={{color: '#3c6dac', fontWeight: '500'}}>
              buy{' '}
              {type === 'positions'
                ? ', 0.02'
                : type === 'deals'
                ? ', in'
                : null}
            </Text>
          </View>
          <Text style={{color: '#fff', opacity: 0.7, fontWeight: '600'}}>
            {type === 'positions'
              ? '1.03945 → 1.34543'
              : type === 'orders'
              ? '0.01/0.01 at 0.08377'
              : type === 'deals'
              ? '0.01 at 1.26779'
              : null}
          </Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Text style={{color: '#fff', opacity: 0.6}}>2024.01.30 16:05:15</Text>
          <Text
            style={{
              color:
                type === 'positions' || type === 'deals'
                  ? '#3c6dac'
                  : '#ffffff66',
              fontWeight: '800',
            }}>
            {type === 'positions'
              ? '10 000.00'
              : type === 'orders'
              ? 'Filled'
              : type === 'deals'
              ? '0.03'
              : null}
          </Text>
        </View>
      </View>
      {opened && (
        <View>
          {type === 'orders' && (
            <Text style={[styles.openedText, {paddingHorizontal: 10}]}>
              {'2024.01.30 17:30, [tp 108377]'}
            </Text>
          )}
          {(type === 'positions' || type === 'orders') && (
            <View
              style={{
                flexDirection: type === 'positions' ? 'row' : 'column',
                paddingHorizontal: 5,
              }}>
              <View style={styles.textView}>
                <Text style={styles.openedText}>S/L:</Text>
                {type === 'orders' && <Text>-</Text>}
                <Text style={styles.openedText}>1.038434</Text>
              </View>
              <View style={styles.textView}>
                <Text style={styles.openedText}>T/P:</Text>
                {type === 'orders' && <Text>-</Text>}
                <Text style={styles.openedText}>1.038434</Text>
              </View>
            </View>
          )}
          {type === 'positions' && (
            <>
              <View style={{flexDirection: 'row', paddingHorizontal: 5}}>
                <View style={styles.textView}>
                  <Text style={styles.openedText}>Open:</Text>

                  <Text style={styles.openedText}>2024.01.30 17:30:16</Text>
                </View>
                <View style={styles.textView}>
                  <Text style={styles.openedText}>Swap: </Text>
                  <Text style={styles.openedText}>0.00</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', paddingHorizontal: 5}}>
                <View style={styles.textView}>
                  <Text style={styles.openedText}>Id:</Text>
                  <Text style={styles.openedText}>#10384340029384</Text>
                </View>
                <View style={styles.textView}>
                  <Text style={styles.openedText}>Commission:</Text>
                  <Text style={styles.openedText}>0.00</Text>
                </View>
              </View>
            </>
          )}
          {type === 'deals' && (
            <>
              <View style={{flexDirection: 'row', paddingHorizontal: 5}}>
                <View style={styles.textView}>
                  <Text style={styles.openedText}>Deal:</Text>

                  <Text style={styles.openedText}>123451234123</Text>
                </View>
                <View style={styles.textView}>
                  <Text style={styles.openedText}>Swap: </Text>
                  <Text style={styles.openedText}>0.00</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', paddingHorizontal: 5}}>
                <View style={styles.textView}>
                  <Text style={styles.openedText}>Order:</Text>
                  <Text style={styles.openedText}>10384340029384</Text>
                </View>
                <View style={styles.textView}>
                  <Text style={styles.openedText}>Charges:</Text>
                  <Text style={styles.openedText}>0.00</Text>
                </View>
              </View>
            </>
          )}
        </View>
      )}
    </TouchableOpacity>
  );
};
export default HistoryCard;
const styles = StyleSheet.create({
  textView: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  openedText: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.5,
  },
});
