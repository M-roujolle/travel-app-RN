import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Details from '../../components/Details';
import Card2 from '../../components/Card2';

const Rajasthan = () => {
  return (
    <View>
      <Details
        img={require('../../assets/images/reservoir2.jpg')}
        locName={'Rajasthan, Inde'}
      />

      <Card2
        locName={'Lac Rajasthan'}
        rating={'5.0'}
        location={'Rajasthan, Inde'}
        time={'21 h'}
      />
    </View>
  )
}

export default Rajasthan
