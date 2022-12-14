import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Details from '../../components/Details';
import Card2 from '../../components/Card2';

const TianTan = () => {
  return (
    <View>
      <Details
        img={require('../../assets/images/temple2.jpg')}
        locName={'Hong Kong, Chine'}
      />

      <Card2
        locName={'Tian Tan Buddha'}
        rating={'5.0'}
        location={'Hong Kong, Chine'}
        time={'16 h'}
      />
    </View>
  )
}

export default TianTan
