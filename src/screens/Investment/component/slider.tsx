import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';
import {useFormContext} from 'react-hook-form';
import {useAnalytics} from '@segment/analytics-react-native';

// Define the props type for the Slider component
interface SliderProps {
  onPressNext: () => void; // Function to be called on pressing the next button
  progress: number; // Progress value should be a number
  summary?: boolean;
  isDisabled?: boolean;
}

const Slider: React.FC<SliderProps> = ({
  onPressNext,
  progress,
  summary,
  isDisabled,
}) => {
  const navigation = useNavigation();
  const [isAnimated, setIsAnimated] = useState<boolean>(false);
  const {reset, watch} = useFormContext();
  const {track} = useAnalytics();

  const goalName = watch('goalName', '');
  const amount = watch('amount', '');

  const onPressCreate = () => {
    setIsAnimated(true);
    setTimeout(() => {
      setIsAnimated(false);
      reset();
      navigation.reset({
        index: 0, // The index of the route to focus on (0 means the first screen in the array)
        routes: [{name: 'Invest'}], // Replace the entire stack with the Invest screen
      });
      navigation.navigate('Home');
      track('Investment Goal Created', {
        goalName: goalName,
        initialGoalAmount: amount,
        goalDeadline: 10000,
        chosenPortfolio: 10000,
        paymentRecurrence: 10000,
      });
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Progress.Bar
        progress={progress}
        width={Dimensions.get('screen').width}
        borderWidth={0}
        height={2}
        unfilledColor="#44444410"
        color="#625EEE"
        animationType="timing"
        animationConfig={{bounciness: 200}}
      />
      <View
        style={[styles.contentContainerNext, {paddingRight: summary ? 0 : 20}]}>
        <Text style={styles.back} onPress={() => navigation.goBack()}>
          Back
        </Text>
        {summary ? (
          <TouchableOpacity
            style={[
              styles.createView,
              // {padding: isAnimated ? 0 : 12, width: isAnimated ? 120 : 140},
            ]}
            onPress={onPressCreate}>
            {isAnimated ? (
              <LottieView
                source={require('../../../mock/Animation.json')}
                style={{width: 300, height: 40}}
                autoPlay
                loop
                duration={4000}
              />
            ) : (
              <Text style={styles.create}>Create Goal</Text>
            )}
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            disabled={isDisabled}
            style={[
              styles.nextView,
              {backgroundColor: isDisabled ? '#E9E9E9' : '#625EEE'},
            ]}
            onPress={onPressNext}>
            <Image
              source={require('../../../assets/image/arrowRight.png')}
              style={{tintColor: isDisabled ? '#BCBCBC' : '#fff'}}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
  },
  nextView: {
    borderRadius: 50,
    padding: 18,
  },
  contentContainerNext: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  back: {
    color: '#625EEE',
    fontSize: 16,
    fontWeight: '500',
  },
  createView: {
    backgroundColor: '#625EEE',
    borderRadius: 10,
    alignItems: 'center',
    width: 120,
    // padding: 10,
    // height: 100,
  },
  create: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    padding: 11,
  },
});
