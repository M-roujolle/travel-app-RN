import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Details from '../../components/Details';
import Card2 from '../../components/Card2';

const Boseman = () => {
  return (
    <View>
      <Details
        img={require('../../assets/images/reservoir.jpg')}
        locName={'Montana, USA'}
      />

      <Card2
        locName={'Reservoir Bozeman'}
        rating={'5.0'}
        location={'Montana, USA'}
        time={'17h 10m'}
      />
    </View>
  )
}

export default Boseman
