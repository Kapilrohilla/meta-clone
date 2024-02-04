import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IonicIcons from 'react-native-vector-icons/Ionicons';

const mails = [
  {
    title: 'MetaQuotes Software Corp.',
    description: 'You have registered a new account',
    date: '30 Jan 2024',
  },
  {
    title: 'Trading Platform',
    description: 'Risk warning',
    date: '30 Jan 3012',
  },
  {
    title: 'MetaQuotes Software Corp.',
    description: 'Your have registered a new account for MetaQuotes',
    date: '30 Jan 2024',
  },
  {
    title: 'Trading Platform',
    description: 'Risk warning',
    date: '30 Jan 3012',
  },
  {
    title: 'MetaQuotes Software Corp.',
    description: 'You have registered a new account',
    date: '30 Jan 2024',
  },
  {
    title: 'Trading Platform',
    description: 'Risk warning',
    date: '30 Jan 3012',
  },
];

export default function Mailbox() {
  return (
    <View style={{flex: 1, backgroundColor: '#0f1821'}}>
      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          alignItems: 'center',
          paddingHorizontal: 10,
          paddingVertical: 10,
        }}>
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <MaterialIcons name="menu" size={25} color="#ffffff77" />
          <Text style={{color: '#fff', fontWeight: '600'}}>Mailbox</Text>
        </TouchableOpacity>
        <View></View>
      </View>
      {mails.map(mail => (
        <Mail
          title={mail.title}
          date={mail.date}
          description={mail.description}
        />
      ))}
      {/* <Mail /> */}
    </View>
  );
}
const Mail = ({
  title,
  description,
  date,
}: {
  title: string;
  description: string;
  date: string;
}) => {
  return (
    <View
      style={{
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
      }}>
      <IonicIcons
        name="logo-web-component"
        size={30}
        color={'#fff'}
        style={{alignSelf: 'baseline', marginTop: 5}}
      />
      <View
        style={{
          borderBottomColor: '#ffffff44',
          borderBottomWidth: 1,
          flexDirection: 'row',
          paddingBottom: 15,
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: Dimensions.get('screen').width - 70,
        }}>
        <View>
          <Text style={{color: '#fff', fontSize: 16}}>{title}</Text>
          <Text style={{color: '#ffffffaa', fontSize: 13}}>
            {description.slice(1, 40)}
          </Text>
        </View>
        <Text style={{alignSelf: 'baseline'}}>{date}</Text>
      </View>
    </View>
  );
};
