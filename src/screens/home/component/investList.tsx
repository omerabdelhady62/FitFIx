import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import InvestList from '../../../mock/invest.json'; // Assuming this is typed
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';

type InvestItem = {
  title: string;
  subTitle?: string;
};

export const ListInvest = () => {
  const navigation = useNavigation();

  const renderItem = (item: InvestItem) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Investment')}>
        <LinearGradient
          colors={['#F9F7F7', '#F2F1FF']}
          style={styles.containerItem}>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.earn}>{item.title}</Text>
              <Image
                source={require('../../../assets/image/daily.png')}
                style={{height: 35, width: 35}}
              />
            </View>
            <Text style={styles.start}>{item?.subTitle}</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{marginTop: 10}}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {InvestList.map((item: InvestItem, index: number) => (
          <View key={index}>{renderItem(item)}</View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F9F7F7',
    padding: 20,
    width: Dimensions.get('screen').width / 1.5,
    marginHorizontal: 5,
  },
  earn: {
    fontSize: 18,
    fontWeight: '700',
    color: '#000000',
    marginRight: 10,
    width: '80%',
  },
  start: {
    fontWeight: '700',
    fontSize: 12,
    color: '#625EEE',
    marginTop: 10,
  },
});
