import React, {useEffect} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Input, Slider, TitleHeader, Divider} from '../component';
import {useNavigation} from '@react-navigation/native';
import ToggleSwitch from 'toggle-switch-react-native';
import {useFormContext} from 'react-hook-form';

export const InitialAmount: React.FC = () => {
  const navigation = useNavigation();
  const {register, setValue, watch} = useFormContext();
  const amount = watch('amount', '');
  const isSchedule = watch('isSchedule', false);

  useEffect(() => {
    register('amount');
  }, [register]);

  const formatCurrency = (text: string) => {
    const numericValue = text.replace(/[^\d]/g, ''); // Remove non-numeric characters
    const formattedValue = Number(numericValue).toLocaleString();
    return `AED ${formattedValue}`;
  };

  const handleTextChange = (text: string) => {
    const formattedValue = formatCurrency(text);
    setValue('amount', formattedValue);
  };

  return (
    <KeyboardAvoidingView
      behavior={'padding'}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 30} // Adjust based on header
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={{padding: 20}}>
          <View style={styles.viewHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../../../assets/image/back.png')} />
            </TouchableOpacity>
            <AntDesign
              name="close"
              size={20}
              onPress={() => navigation.navigate('Invest')}
            />
          </View>
          <TitleHeader
            title="Your Initial Amount"
            subtitle="Enter the amount you will start investing to achieve this goal"
          />
          <Input
            title="Enter amount in AED"
            value={amount}
            onChangeText={handleTextChange}
            onPressClear={() => setValue('amount', '')}
            keyboardType="numeric"
          />
          <View style={styles.viewSchedule}>
            <Text style={styles.textSchedule}>Schedule a monthly deposit </Text>
            <ToggleSwitch
              isOn={isSchedule}
              onColor="#625EEE"
              offColor="#78788029"
              size="medium"
              onToggle={value => setValue('isSchedule', value)}
              animationSpeed={300}
            />
          </View>
          <Divider />
          <View style={styles.viewInfo}>
            <Image source={require('../../../assets/image/info.png')} />
            <Text style={styles.textAllBank}>
              All bank transfers will require your explicit confirmation.
            </Text>
          </View>
        </View>
      </ScrollView>
      <Slider
        progress={0.4}
        onPressNext={() => navigation.navigate('PortfolioDetails')}
        isDisabled={Boolean(!amount.length)}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 10,
  },
  scrollContent: {
    flexGrow: 1,
  },
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewSchedule: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 5,
  },
  textSchedule: {
    fontSize: 16,
    color: '#202020',
  },
  viewInfo: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  textAllBank: {
    marginLeft: 10,
    fontSize: 14,
    lineHeight: 15,
    color: '#202020',
  },
});
