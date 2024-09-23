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
import LinearGradient from 'react-native-linear-gradient';

export const ListService = () => {
  const renderItem = () => {
    return (
      <TouchableOpacity>
        <LinearGradient
          colors={['#F9F7F7', '#F2F1FF']}
          style={[
            styles.contanierItem,
            {
              width: Dimensions.get('screen').width / 2.8,
              flexDirection: 'column',
              paddingVertical: 30,
            },
          ]}>
          <Image
            source={require('../../../assets/image/car.png')}
            style={{width: 105, height: 65}}
          />
          <View style={styles.viewCarText}>
            <Text style={styles.textCar}>Car Insurance</Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{marginTop: 40}}>
      <Text style={styles.service}>Service Hub</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center', marginTop: 20}}>
        <View style={styles.viewCashCard}>
          <Image
            source={require('../../../assets/image/plus.png')}
            style={{width: 30, height: 30}}
          />
          <Text style={styles.cash}>Cash in advance</Text>
          <Text style={styles.availText}>
            You can now avail up to 50% of your total balance,
          </Text>
          <TouchableOpacity style={styles.viewRequest}>
            <Text style={styles.request}>Request Cash</Text>
          </TouchableOpacity>
        </View>
        {[0, 1, 2, 3].map((item, index) => {
          return <View key={index}>{renderItem()}</View>;
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contanierItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F9F7F7',
    padding: 20,
    width: Dimensions.get('screen').width / 1.5,
    marginHorizontal: 5,
  },
  viewCarText: {
    borderRadius: 10,
    backgroundColor: 'transparent',
    width: '100%',
    alignItems: 'center',
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#202020',
    marginTop: 30,
  },
  textCar: {
    fontSize: 11,
    fontWeight: '700',
    color: '#202020',
  },
  viewCashCard: {
    width: Dimensions.get('screen').width / 2.8,
    borderRadius: 16,
    borderWidth: 1,
    backgroundColor: '#fff',
    borderColor: '#8F8F8F',
    marginRight: 5,
    padding: 8,
    paddingVertical: 20,
  },
  service: {
    fontSize: 16,
    color: '#00000080',
    fontWeight: '700',
  },
  cash: {
    fontSize: 14,
    fontWeight: '700',
    color: '#636363',
    marginVertical: 10,
  },
  availText: {
    fontSize: 9,
    fontWeight: '500',
    color: '#636363',
  },
  viewRequest: {
    borderRadius: 10,
    backgroundColor: '#625EEE',
    width: '85%',
    padding: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  request: {
    fontSize: 12,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
