import {memo, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';

const HistoryCard = ({
  type,
  displayObj,
}: {
  displayObj: any;
  type: 'positions' | 'orders' | 'deals';
}) => {
  const [opened, setOpened] = useState(false);
  const volume = displayObj?.volume;
  const price = Number(displayObj?.price).toFixed(3);
  const closePrice = Number(displayObj?.closePrice).toFixed(3);
  const profit = Number(displayObj?.profit).toFixed(3);
  const typeNum = displayObj?.type;
  const stopLoss = displayObj?.stopLoss;
  const takeProfit = displayObj?.takeProfit;
  const open = '';
  const date = '';
  const id = displayObj?.ticket;
  const commission = displayObj?.commission;
  const swap = displayObj?.swap;
  let orderType: string;
  if (typeNum === 0) {
    orderType = 'Sell';
  } else if (typeNum === 1) {
    orderType = 'Buy';
  } else if (typeNum === 2) {
    orderType = 'Buy-Limit';
  } else if (typeNum === 3) {
    orderType = 'Sell-Limit';
  } else if (typeNum === 4) {
    orderType = 'Buy-Stop';
  } else if (typeNum === 5) {
    orderType = 'Sell-Stop';
  } else if (typeNum === 6) {
    orderType = 'Buy-Stop-Limit';
  } else if (typeNum === 7) {
    orderType = 'Sell-Stop-Limit';
  } else {
    orderType = 'invalid';
  }
  // console.log(displayObj, ',,, dispaly');
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
            <Text style={{color: '#fff', fontWeight: '600'}}>
              {displayObj?.symbol}
            </Text>
            <Text
              style={{
                color:
                  typeNum === 0 ||
                  typeNum === 3 ||
                  typeNum === 5 ||
                  typeNum === 7
                    ? '#ce262c'
                    : '#3c6dac',
                fontWeight: '500',
              }}>
              {orderType + ' '}
              {type === 'positions'
                ? `, ${volume}`
                : type === 'deals'
                ? ', in'
                : null}
            </Text>
          </View>
          <Text style={{color: '#fff', opacity: 0.7, fontWeight: '600'}}>
            {type === 'positions'
              ? `${price} → ${closePrice}`
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
                  ? // ? '#3c6dac'
                    typeNum === 0 ||
                    typeNum === 3 ||
                    typeNum === 5 ||
                    typeNum === 7
                    ? '#ce262c'
                    : '#3c6dac'
                  : '#ffffff66',
              fontWeight: '800',
            }}>
            {type === 'positions'
              ? profit
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
                <Text style={styles.openedText}>{stopLoss}</Text>
              </View>
              <View style={styles.textView}>
                <Text style={styles.openedText}>T/P:</Text>
                {type === 'orders' && <Text>-</Text>}
                <Text style={styles.openedText}>{takeProfit}</Text>
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
                  <Text style={styles.openedText}>{swap}</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', paddingHorizontal: 5}}>
                <View style={styles.textView}>
                  <Text style={styles.openedText}>Id:</Text>
                  <Text style={styles.openedText}>#{id}</Text>
                </View>
                <View style={styles.textView}>
                  <Text style={styles.openedText}>Commission:</Text>
                  <Text style={styles.openedText}>{commission}</Text>
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
