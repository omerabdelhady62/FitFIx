import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import PieChart from 'react-native-pie-chart';

const AssetAllocation = () => {
  const widthAndHeight = Dimensions.get('window').width / 3.2;
  const series = [10, 20];
  const sliceColor = ['#B2B2B2', '#625EEE'];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>AssetAllocation</Text>
      <View style={styles.contentContainer}>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.75}
        />
        <View style={{width: '50%', marginLeft: 20}}>
          <Text style={styles.growthText}>Growth & Income Portfolio</Text>
          <Text style={styles.riskText}>Risk Level 3/5</Text>
          <Text style={styles.fIXEDText}>40% FIXED INCOME 60% Equities</Text>
        </View>
      </View>
    </View>
  );
};
export default AssetAllocation;

const styles = StyleSheet.create({
  container: {},
  title: {
    color: '#20202080',
    fontWeight: '700',
    fontSize: 16,
    margin: 10,
    marginLeft: 20,
    marginBottom: 15,
  },
  contentContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  growthText: {
    color: '#202020',
    fontSize: 16,
    fontWeight: '700',
  },
  riskText: {
    color: '#625EEE',
    fontSize: 12,
    marginVertical: 7,
    // lineHeight: 10,
  },
  fIXEDText: {
    fontSize: 12,
    color: '#202020',
  },
});
