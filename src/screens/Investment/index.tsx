import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Button} from '../../component';
import {useNavigation} from '@react-navigation/native';

export const Investment = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.contanier}>
      <AntDesign
        name="close"
        size={20}
        onPress={() => navigation.goBack()}
        color="#000000"
      />
      <View style={styles.contentContanier}>
        <View>
          <Image source={require('../../assets/image/mony.png')} />
          <Text style={styles.textTitle}>Invest & put your money to work</Text>
          <Text style={styles.textSubTitle}>
            Get closer to your dream with our fully managed portfolios tailored
            to fit your risk appetite, time horizon, and personal values.Find
            out the most suitable portfolio for you in minutes.
          </Text>
        </View>
        <Button
          label="Start Now"
          onPress={() => {
            navigation.navigate('CreateGoal');
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contanier: {
    backgroundColor: '#E1EDFF',
    flex: 1,
    padding: 20,
    paddingTop: 70,
  },
  contentContanier: {
    justifyContent: 'space-between',
    flex: 1,
    marginTop: Dimensions.get('screen').height * 0.12,
  },

  textTitle: {
    fontSize: 34,
    fontWeight: '600',
    marginTop: 40,
    color: '#000000',
  },
  textSubTitle: {
    fontSize: 16,
    marginTop: 30,
    fontWeight: '300',
    lineHeight: 22,
    color: '#000000',
  },
});
