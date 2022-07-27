import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Details from '../../components/Details';
import Card2 from '../../components/Card2';

const SierraNevada = () => {
  return (
    <View>
      <Details
        img={require('../../assets/images/mount.jpg')}
        locName={'Nevada, USA'}
      />

      <Card2
        locName={'Sierra Nevada'}
        rating={'5.0'}
        location={'Nevada, USA'}
        time={'13 h'}
      />
    </View>
  )
}

export default SierraNevada
