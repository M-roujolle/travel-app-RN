import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Details from '../../components/Details';
import Card2 from '../../components/Card2';

const Osaka = () => {
  return (
    <View>
      <Details
        img={require('../../assets/images/temple.jpg')}
        locName={'Osaka, Japon'}
      />

      <Card2
        locName={'Chateau Osaka'}
        rating={'5.0'}
        location={'Osaka, Japon'}
        time={'24 h'}
      />
    </View>
  )
}

export default Osaka
