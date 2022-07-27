import React, { useEffect } from 'react';
import { PermissionsAndroid } from 'react-native';
import Providers from './src/navigation';

const App = () => {

  const androidPermissions = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message:
            'Nous avons besoin de votre permission pour la localisation ' +
            'veuillez accepter.',
          buttonNeutral: 'Me le rappeller plus tard',
          buttonNegative: 'Quitter',
          buttonPositive: 'OK',
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Vous pouvez utiliser la localisation');
      } else {
        console.log('Localisation refusée');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    androidPermissions();
  }, [])

  return (
    <Providers />
  )
}

export default App