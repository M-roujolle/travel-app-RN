import { StyleSheet, Text, View, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import React, { useContext } from 'react';
import IconContainer from '../../components/IconContainer';
import Categories from '../../components/Categories';
import Card from '../../components/Card';
import Search from '../../components/SearchButton';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../auth/AuthProvider';

const SCREENHEIGHT = Dimensions.get('window').height;
const SCREENWIDTH = Dimensions.get('window').width;

const Home = () => {
  const navigation = useNavigation();
  const { user } = useContext(AuthContext);

  return (
    <View>
      <View style={styles.upper}>
        <View style={styles.top}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <IconContainer
              iconName={'align-left'}
            />
          </TouchableOpacity>

          <Text style={styles.text}>
            Localisation
            {'\n'}
            Le Havre, France
          </Text>

          <IconContainer
            iconName={'bell'}
          />
        </View>

        <Text style={[styles.text, {
          fontFamily: 'AlongSansExtraBold',
          fontSize: 20,
          color: 'white',
          padding: 20,
          top: 0,
        }]}>
          Où voullez vous aller ?
        </Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.cats} >
            <Categories
              emoji={require('../../assets/images/globe.png')}
              detailText='Tout'
            />

            <Categories
              emoji={require('../../assets/images/mountain.png')}
              detailText='Montagnes'
            />

            <Categories
              emoji={require('../../assets/images/shrine.png')}
              detailText='Temples'
            />

            <Categories
              emoji={require('../../assets/images/water.png')}
              detailText='Lacs'
            />
          </View>
        </ScrollView>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.middle}>
          <View style={styles.img}>
            <Card
              img={require('../../assets/images/reservoir.jpg')}
              locName='Reservoir Bozeman'
              rating={'5.0'}
              location={'Montana, USA'}
              detailsPage={() => navigation.navigate('Boseman')}
            />
          </View>

          <View style={styles.img}>
            <Card
              img={require('../../assets/images/reservoir2.jpg')}
              locName='Lac Rajasthan'
              rating={'5.0'}
              location={'Rajasthan, Inde'}
              detailsPage={() => navigation.navigate('Rajasthan')}
            />
          </View>

          <View style={styles.img}>
            <Card
              img={require('../../assets/images/temple2.jpg')}
              locName='Tian Tan Buddha'
              rating={'5.0'}
              location={'Hong Kong, Chine'}
              detailsPage={() => navigation.navigate('TianTan')}
            />
          </View>

          <View style={styles.img}>
            <Card
              img={require('../../assets/images/mount.jpg')}
              locName='Sierra Nevada'
              rating={'5.0'}
              location={'Nevada, USA'}
              detailsPage={() => navigation.navigate('SierraNevada')}
            />
          </View>

          <View style={styles.img}>
            <Card
              img={require('../../assets/images/temple.jpg')}
              locName='Chateau Osaka'
              iconName={'star'}
              rating={'5.0'}
              location={'Osaka, Japon'}
              detailsPage={() => navigation.navigate('Osaka')}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottom}>
        <Search />
      </View>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
  upper: {
    height: SCREENHEIGHT / 3.5,
    backgroundColor: 'black',
  },

  middle: {
    height: SCREENHEIGHT / 1.8,
    flexDirection: 'row',
    width: SCREENWIDTH * 4.1,
    backgroundColor: 'black',
  },

  bottom: {
    height: (SCREENHEIGHT - (SCREENHEIGHT / 3.5) - (SCREENHEIGHT / 1.8)),
    backgroundColor: "black",
  },

  top: {
    padding: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  text: {
    fontFamily: 'AlongSansSemiBold',
    fontSize: 15,
    color: 'white',
    top: 10
  },

  cats: {
    width: SCREENWIDTH * 1.4,
    flexDirection: 'row',
    justifyContent: "space-evenly",
    left: 50,
    bottom: 10
  },

  img: {
    padding: 20,
    backgroundColor: "black",
    width: 300,
    height: 420,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    top: 10
  },
})