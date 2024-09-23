import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {LineChart} from 'react-native-gifted-charts';

const Chart = () => {
  const renderLabel = (label: string) => {
    return <Text style={styles.xTextStyle}>{label}</Text>;
  };

  const latestData = [
    {
      value: 100,
      labelComponent: () => renderLabel('1y'),
    },
    {value: 120, hideDataPoint: true},
    {
      value: 210,
      labelComponent: () => renderLabel('2y'),
    },
    {value: 250, hideDataPoint: true},
    {
      value: 330,
      labelComponent: () => renderLabel('3y'),
    },
    {value: 310, hideDataPoint: true},
    {
      value: 270,
      labelComponent: () => renderLabel('4y'),
    },
    {value: 240, hideDataPoint: true},
    {
      value: 340,
      labelComponent: () => renderLabel('5y'),
    },
    {value: 260, hideDataPoint: true},
    {
      value: 200,
      labelComponent: () => renderLabel('6y'),
    },
    {value: 210, hideDataPoint: true},
    {
      value: 270,
      labelComponent: () => renderLabel('7y'),
    },
    {value: 240, hideDataPoint: true},
    {value: 180, hideDataPoint: true, labelComponent: () => renderLabel('8y')},
    {value: 220},
    {
      value: 300,
      labelComponent: () => renderLabel('9y'),
    },
    {value: 320, hideDataPoint: true},
    {
      value: 320,
      labelComponent: () => renderLabel('10y'),
    },
  ];

  const pointerConfig = {
    pointerVanishDelay: 2000,
    initialPointerAppearDelay: 1000,
    initialPointerIndex: 8,
    pointerStripColor: '#625EEE33',
    radius: 6,
    pointerColor: '#625EEE',
    showPointerStrip: true,
    pointerStripUptoDataPoint: true,
    pointerComponent: () => (
      <View style={styles.containerPointer}>
        <View style={styles.pointer} />
      </View>
    ),

    pointerLabelComponent: (items: any) => (
      <View style={styles.viewLabel}>
        <Text style={styles.labelText}>{items[0].value}</Text>
      </View>
    ),
  };

  return (
    <View>
      <View style={{backgroundColor: '#fff'}}>
        <LineChart
          isAnimated
          color="#D8D7FF"
          maxValue={400}
          showDataPointsForMissingValues={true}
          animateOnDataChange
          animationDuration={1000}
          areaChart
          showYAxisIndices={false}
          showFractionalValues={false}
          showDataPointLabelOnFocus={true}
          showDataPointOnFocus={true}
          data={latestData}
          hideDataPoints
          startFillColor={'rgba(98, 94, 238, 1)'}
          endFillColor={'rgba(216, 215, 255, 1)'}
          startOpacity={0.3}
          endOpacity={0}
          spacing={Dimensions.get('screen').width / 21}
          backgroundColor="#fff"
          rulesColor="#fff"
          rulesType="solid"
          initialSpacing={20}
          yAxisColor="#fff"
          xAxisColor="#fff"
          focusEnabled={true}
          pointerConfig={pointerConfig}
          hideYAxisText={true}
        />
      </View>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  containerPointer: {
    width: 13,
    height: 13,
    backgroundColor: '#625EEE40',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    right: 1,
  },
  pointer: {
    width: 8,
    height: 8,
    backgroundColor: '#625EEE',
    borderRadius: 50,
  },
  labelText: {
    fontSize: 16,
    color: '#625EEE',
    fontWeight: '600',
  },
  viewLabel: {
    width: 50,
    bottom: 20,
    right: 5,
  },
  xTextStyle: {
    color: '#202020',
    fontSize: 12,
  },
});
