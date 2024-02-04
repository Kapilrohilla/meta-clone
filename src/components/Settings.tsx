import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Checkbox} from 'react-native-paper';

export default function Settings() {
  //   const sellColor = '#ce262c';
  const buyColor = '#3c6dac';
  return (
    <View style={{flex: 1, backgroundColor: '#0f1821'}}>
      {/* Topbar */}
      <TouchableOpacity>
        <View
          style={{
            paddingHorizontal: 10,
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
          }}>
          <MaterialIcons name="menu" size={25} color={'#ffffffaa'} />
          <Text style={{color: '#ffffffaa', fontWeight: '600', fontSize: 16}}>
            Settings
          </Text>
        </View>
      </TouchableOpacity>
      <ScrollView
        style={{paddingHorizontal: 15, paddingVertical: 30}}
        horizontal={false}>
        <Text style={{color: '#fff', fontSize: 18, fontWeight: '600'}}>
          Quotes
        </Text>
        <QuotesMenu
          title={'Advanced mode'}
          description={
            'In the advanced mode, the quotes window contains spreads, time data, as well as High and Low prices.'
          }
          checkbox={true}
        />
        <QuotesMenu
          title={'Order sounds'}
          description="Play sounds for orders"
          checkbox={true}
        />
        <QuotesMenu
          title={'One Click Trading'}
          description="Allows performing trade operation with a single tap without additional confirmation from the trader"
          checkbox={true}
        />

        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            fontWeight: '600',
            marginTop: 20,
          }}>
          MESSAGES
        </Text>
        <QuotesMenu title={'MetaQuotes'} description="6AE14924B" />
        <QuotesMenu title={'Vibration'} description="Always" />
        <QuotesMenu
          title={'Notification ringtone'}
          description="Default ringtone (Encounter)"
        />
        <QuotesMenu title={'Content auto-download'} description="Always" />
        <QuotesMenu title={'Language'} description="System language" />

        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            fontWeight: '600',
            marginTop: 20,
          }}>
          OTP
        </Text>
        <QuotesMenu title={'OTP'} description="One-time password Generator" />

        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            fontWeight: '600',
            marginTop: 20,
          }}>
          News
        </Text>
        <QuotesMenu
          title={'OTP'}
          description="One-time password Generator"
          checkbox={true}
        />
        <Text
          style={{
            color: '#fff',
            fontSize: 18,
            fontWeight: '600',
            marginTop: 20,
          }}>
          Interface
        </Text>
        <QuotesMenu
          title={'Tablet Interface'}
          description="Enable tablet interface"
          checkbox={true}
        />
        <View style={{marginBottom: 50}}>
          <QuotesMenu
            title={'Choose theme'}
            description="System default"
            checkbox={false}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const QuotesMenu = ({
  title,
  description,
  checkbox = false,
}: {
  title: string;
  description: string;
  checkbox?: boolean;
}) => {
  const buyColor = '#3c6dac';
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: Dimensions.get('window').width - 30,
        borderBlockColor: '#ffffff44',
        borderTopWidth: 1,
        marginTop: 10,
        // borderBottomWidth: 1,
        paddingTop: 10,
      }}>
      <View
        style={{
          maxWidth: Dimensions.get('window').width - 80,
        }}>
        <Text style={{color: '#fff', fontWeight: '500'}}>{title}</Text>
        <Text style={{color: '#ffffff77', fontSize: 12, width: 'auto'}}>
          {description}
        </Text>
      </View>
      {checkbox && (
        <Checkbox
          color={buyColor}
          uncheckedColor="#2c2c2c"
          onPress={() => true}
          status={'checked'}
        />
      )}
    </View>
  );
};
