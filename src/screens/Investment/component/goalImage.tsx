import React, {useEffect, useState} from 'react';
import {useFormContext} from 'react-hook-form';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Asset, launchImageLibrary} from 'react-native-image-picker';
import LinearGradient from 'react-native-linear-gradient';

type GoalImageProps = {
  goalName?: string;
};

const GoalImage: React.FC<GoalImageProps> = ({goalName}) => {
  const {register, setValue, watch} = useFormContext();
  const amount = watch('image', null);

  useEffect(() => {
    register('image');
  }, [register]);

  const [imageUri, setImageUri] = useState<string | null>(amount);

  const pickImage = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 1,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorMessage);
        } else if (response.assets && response.assets.length > 0) {
          const asset: Asset = response.assets[0];
          console.log('Selected Asset:', asset);
          setImageUri(asset.uri || null);
          setValue('image', asset.uri);
        }
      },
    );
  };

  return (
    <LinearGradient
      colors={['#D8D7FF', '#F2F1FF']}
      style={styles.linearGradient}>
      <Image
        source={
          imageUri ? {uri: imageUri} : require('../../../assets/image/bank.png')
        }
        style={[
          styles.logo,
          {
            width: imageUri ? '100%' : 95,
            height: imageUri ? '100%' : 95,
          },
        ]}
      />
      {goalName && (
        <Text
          style={[styles.goalName, {color: imageUri ? '#fff' : '#000'}]}
          numberOfLines={2}>
          {goalName}
        </Text>
      )}

      <TouchableOpacity onPress={pickImage} style={styles.editIcon}>
        <Image source={require('../../../assets/image/edit.png')} />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default GoalImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    height: 130,
  },
  editIcon: {
    position: 'absolute',
    right: 15,
    bottom: 15,
  },
  logo: {
    resizeMode: 'cover',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  goalName: {
    position: 'absolute',
    left: 15,
    bottom: 15,
    fontSize: 24,
    color: '#FFFFFF',
    fontWeight: '700',
    width: '80%',
  },
});
