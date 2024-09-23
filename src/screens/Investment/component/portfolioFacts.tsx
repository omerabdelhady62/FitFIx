import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import portfolioList from '../../../mock/PortfolioList.json';

const PortfolioFacts = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.portfolio}>Portfolio Key Facts</Text>
      <Text style={styles.lastUpdate}>Last updated on 11/11/2023</Text>
      <View style={styles.divider} />
      {portfolioList.map?.((item, index) => {
        return (
          <View key={index}>
            <View style={styles.viewProtfolioItem}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.Allocation}>{item.Allocation}</Text>
              <Image source={require('../../../assets/image/question.png')} />
            </View>
            <View style={styles.divider} />
          </View>
        );
      })}
    </View>
  );
};

export default PortfolioFacts;

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  viewProtfolioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
  },
  name: {
    width: '50%',
    color: '#636363',
  },
  Allocation: {
    width: '20%',
    color: '#636363',
    textAlign: 'left',
  },
  divider: {
    width: '95%',
    backgroundColor: '#E9E9E9',
    height: 1,
    marginVertical: 15,
    alignSelf: 'center',
  },
  portfolio: {
    color: '#202020',
    fontSize: 16,
    marginLeft: 30,
    fontWeight: '700',
  },
  lastUpdate: {
    fontSize: 12,
    color: '#8F8F8F',
    marginLeft: 30,
    marginTop: 7,
  },
});
