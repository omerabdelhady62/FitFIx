import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Image} from 'react-native';
import AnimatedNumbers from 'react-native-animated-numbers';
import {ListInvest} from './component/investList';
import {ListService} from './component/serviceList';

export const Home = () => {
  const [animateToNumber, setAnimateToNumber] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setAnimateToNumber(18585);
    }, 1500);
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerPlan}>
          <View style={styles.header}>
            <Image
              source={{
                uri: 'https://t3.ftcdn.net/jpg/02/00/90/24/360_F_200902415_G4eZ9Ok3Ypd4SZZKjc8nqJyFVp1eOD6V.jpg',
              }}
              style={styles.userImage}
            />
            <Image source={require('../../assets/image/bell.png')} />
          </View>
          <Text style={styles.gratuity}>Gratuity Plan</Text>
          <View style={styles.priceView}>
            <AnimatedNumbers
              includeComma
              animateToNumber={animateToNumber}
              fontStyle={{fontSize: 56, fontWeight: '700', color: '#FFFFFF'}}
            />
            <Text style={styles.aed}>AED</Text>
          </View>
        </View>
        <View style={styles.containerList}>
          <ListInvest />
          <ListService />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#625EEE',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  userImage: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  gratuity: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 20,
  },
  containerPlan: {
    backgroundColor: '#625EEE',
    padding: 10,
    flex: 0.35,
  },
  aed: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '300',
    marginTop: 40,
    marginLeft: 3,
  },
  priceView: {
    flexDirection: 'row',
    marginTop: 20,
  },
  containerList: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#fff',
    flex: 1,
    padding: 10,
    justifyContent: 'flex-start',
  },
});
