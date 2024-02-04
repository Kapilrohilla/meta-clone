import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

export default function BrokerInformation() {
  const nav = useNavigation();
  const handleGoBack = () => {
    nav.goBack();
  };
  const companyName = 'MetaQuotes Software Corp.';
  const registrationAddress =
    'MetaTrader 5 provides access to financial market allowing users to perform technincal analysis and use algo trading programs."';
  const location =
    'P.O. Box N-341, Charlotte House, Charlotte Street, Nassau, Bahamas';
  const website = 'www.metaquotes.net';
  const email = 'www.mql5.com';
  const reportingEmail = 'www.mql5.com';
  return (
    <View style={{flex: 1, backgroundColor: '#0f1821'}}>
      <View style={styles.topBar}>
        <TouchableOpacity
          onPress={handleGoBack}
          style={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <MaterialIcon name="arrow-back" size={25} color="#fff" />
          <Text
            style={{
              fontSize: 18,
              color: '#fff',
              fontFamily: 'Inter-SemiBold',
              fontWeight: '600',
              marginLeft: 10,
            }}>
            Broker Information
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={{paddingHorizontal: 20}}>
        <View style={styles.cardContain}>
          <Text style={{fontSize: 17, color: '#fff'}}>{companyName}</Text>
          <Text style={{color: '#808080', fontSize: 14, fontWeight: '600'}}>
            Company
          </Text>
        </View>
        <View style={styles.cardContain}>
          <Text style={{fontSize: 17, color: '#fff'}}>
            {registrationAddress}
          </Text>
          <Text style={{color: '#808080', fontSize: 14, fontWeight: '600'}}>
            Registration Address
          </Text>
        </View>
        <View style={styles.cardContain}>
          <Text style={{fontSize: 17, color: '#fff'}}>{location}</Text>
          <Text style={{color: '#808080', fontSize: 14, fontWeight: '600'}}>
            Offices Location
          </Text>
        </View>
        <View style={styles.cardContain}>
          <Text
            style={{
              fontSize: 17,
              color: '#0076d3',
              textDecorationLine: 'underline',
              textDecorationColor: '#0076d3',
            }}>
            {website}
          </Text>
          <Text style={{color: '#808080', fontSize: 14, fontWeight: '600'}}>
            Website
          </Text>
        </View>
        <View style={styles.cardContain}>
          <Text
            style={{
              fontSize: 17,
              color: '#0076d3',
              textDecorationColor: '#0076d3',
              textDecorationLine: 'underline',
            }}>
            {email}
          </Text>
          <Text
            style={{
              color: '#808080',
              fontSize: 14,
              fontWeight: '600',
              textDecorationColor: '#0076d3',
              textDecorationLine: 'underline',
            }}>
            Generic Email
          </Text>
        </View>
        <View style={styles.cardContain}>
          <Text
            style={{
              fontSize: 17,
              color: '#0076d3',
              textDecorationColor: '#0076d3',
              textDecorationLine: 'underline',
            }}>
            {reportingEmail}
          </Text>
          <Text style={{color: '#808080', fontSize: 14, fontWeight: '600'}}>
            Abuse Reporting Email
          </Text>
        </View>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: '#293543',
          width: '100%',
          padding: 15,
        }}>
        <Text
          style={{
            color: '#fff',
            textTransform: 'uppercase',
            textAlign: 'center',
            fontWeight: '700',
          }}>
          Report A Problem to the Broker
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  cardContain: {
    borderBottomColor: '#888888',
    borderBottomWidth: 0.8,
    paddingBottom: 5,
    paddingTop: 20,
  },
});
