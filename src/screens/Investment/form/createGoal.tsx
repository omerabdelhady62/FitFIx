import React, {useEffect} from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Input, Slider, TitleHeader} from '../component';
import AntDesign from 'react-native-vector-icons/AntDesign';
import GoalImage from '../component/goalImage';
import {useFormContext} from 'react-hook-form';

export const CreateGoal: React.FC = () => {
  const navigation = useNavigation();
  const {register, setValue, watch} = useFormContext();

  const goalName = watch('goalName', '');

  useEffect(() => {
    register('goalName');
  }, [register]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 40} // Adjust based on header
    >
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View>
          <View style={{padding: 20}}>
            <AntDesign
              name="close"
              size={20}
              onPress={() => navigation.goBack()}
            />
            <TitleHeader
              title="Create a Goal"
              subtitle="Write the name of the item or experience you’re saving for."
            />
            <GoalImage />
            <Input
              title="Goal Name"
              value={goalName}
              onChangeText={text => setValue('goalName', text)}
              onPressClear={() => setValue('goalName', '')}
              keyboardType="ascii-capable"
            />
          </View>
        </View>
      </ScrollView>
      <Slider
        progress={0.2}
        onPressNext={() => navigation.navigate('InitialAmount')}
        isDisabled={Boolean(!goalName.length)}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
    paddingBottom: 30,
  },
});
