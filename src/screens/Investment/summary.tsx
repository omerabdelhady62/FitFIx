import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import GoalImage from './component/goalImage';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import CheckBox from '@react-native-community/checkbox';
import {Slider} from './component';
import {useFormContext} from 'react-hook-form';

type RenderItemProps = {
  goalName: string;
  price: string;
  title: string;
  isEdit: boolean;
};

export const GoalSummary = () => {
  const navigation = useNavigation<NavigationProp<any>>();
  const [toggleCheckBox, setToggleCheckBox] = useState<boolean>(false);
  const {watch} = useFormContext();

  const amount = watch('amount', '');
  const goalName = watch('goalName', '');

  const renderItem = ({goalName, price, title, isEdit}: RenderItemProps) => {
    return (
      <View style={styles.viewItem}>
        <Text style={styles.goalName}>{goalName}</Text>
        <View style={styles.contentContainerAmount}>
          <Text style={styles.amountText}>{title}</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.amount}>{price}</Text>
            {isEdit && (
              <Image
                source={require('../../assets/image/pencil.png')}
                style={styles.edit}
              />
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <AntDesign name="close" size={20} onPress={() => navigation.goBack()} />
        <GoalImage goalName={goalName} />
        {renderItem({
          goalName: 'Goal Summary',
          title: 'Initial Amount',
          price: amount,
          isEdit: true,
        })}
        {renderItem({
          goalName: 'Recurring payment',
          title: 'Monthly Top Up',
          price: 'AED 500',
          isEdit: true,
        })}
        {renderItem({
          goalName: 'Investment Choice',
          title: 'Portfolio',
          price: 'Growth & Income',
          isEdit: false,
        })}
        <View style={styles.contentContainerAgreed}>
          <CheckBox
            style={{transform: [{scale: 0.8}]}}
            boxType="square"
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            onCheckColor="#625EEE"
            onTintColor="#625EEE"
          />
          <Text style={styles.readAgreed}>
            I’ve read and agreed to
            <Text style={styles.finFlxAccount}>
              {` `}
              FinFlx Account Opening {`\n`} Agreement
            </Text>
          </Text>
        </View>
      </View>
      <View style={{paddingBottom: 10}}>
        <Slider
          progress={0.8}
          onPressNext={() => navigation.navigate('InitialAmount')}
          summary
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
    paddingTop: 70,
  },
  viewItem: {
    marginTop: 25,
  },
  goalName: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '700',
  },
  contentContainerAmount: {
    backgroundColor: '#FAF8F7',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amountText: {
    color: '#00000080',
    fontSize: 16,
    fontWeight: '600',
  },
  amount: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 10,
  },
  edit: {},
  contentContainerAgreed: {
    flexDirection: 'row',
    marginTop: 30,
  },
  readAgreed: {
    color: '#000000',
    marginLeft: 5,
    lineHeight: 22,
  },
  finFlxAccount: {
    color: '#625EEE',
    textDecorationLine: 'underline',
  },
});
