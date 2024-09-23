import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FundListData from '../../../mock/FundList.json';

const FundList = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewHeader}>
        <View style={{width: '30%'}} />
        <Text style={styles.foundText}>Fund Name</Text>
        <Text style={styles.allocationText}>Allocation</Text>
      </View>
      <View style={styles.divider} />
      {FundListData.map?.((item, index) => {
        return (
          <View key={index}>
            <View style={styles.viewFoundItem}>
              <View style={{width: '30%'}}>
                <View
                  style={[
                    styles.viewBound,
                    {backgroundColor: item.disabled ? '#B2B2B2' : '#625EEE'},
                  ]}>
                  <Text style={styles.bound}>{item.bound}</Text>
                </View>
              </View>
              <Text style={styles.foundName}>{item.name}</Text>
              <Text style={styles.allocation}>{item.allocation}</Text>
            </View>
            <View style={styles.divider} />
          </View>
        );
      })}
    </View>
  );
};

export default FundList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 40,
  },
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  foundText: {
    width: '30%',
    color: '#202020',
    fontWeight: '500',
  },
  allocationText: {
    width: '30%',
    textAlign: 'center',
    color: '#202020',
    fontWeight: '500',
  },
  viewFoundItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewBound: {
    width: 80,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    // marginRight: 10,
  },
  bound: {
    color: '#FFFFFF',
  },
  foundName: {
    width: '30%',
    fontSize: 12,
    color: '#202020',
    lineHeight: 15,
    textAlign: 'left',
  },
  allocation: {
    width: '30%',
    textAlign: 'center',
    fontSize: 14,
    color: '#202020',
  },
  divider: {
    width: '100%',
    backgroundColor: '#E9E9E9',
    height: 2,
    marginVertical: 10,
  },
});
