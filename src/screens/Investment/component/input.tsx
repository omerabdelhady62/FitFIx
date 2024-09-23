import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TextInputProps,
  TouchableOpacity,
} from 'react-native';

interface InputProps extends TextInputProps {
  title: string;
  value: string;
  onChangeText: (text: string) => void;
  onPressClear: () => void;
  keyboardType?: TextInputProps['keyboardType'];
}

const Input: React.FC<InputProps> = ({
  title,
  onChangeText,
  keyboardType = 'numeric',
  onPressClear,
  value,
}) => {
  return (
    <View style={styles.container}>
      <View style={{width: '90%'}}>
        <Text style={styles.inputTitle}>{title}</Text>
        <TextInput
          value={value}
          style={styles.input}
          autoFocus={true}
          autoCorrect={false}
          autoComplete="off"
          autoCapitalize="none"
          keyboardType={keyboardType}
          returnKeyType="none"
          onChangeText={onChangeText}
        />
      </View>
      <TouchableOpacity onPress={onPressClear}>
        <Image source={require('../../../assets/image/close.png')} />
      </TouchableOpacity>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#625EEE',
    borderRadius: 10,
    width: '100%',
    padding: 10,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // height: 65,
    // paddingTop: 20,
    paddingVertical: 6,
    // flex: 1,
  },
  inputTitle: {
    color: '#625EEE',
    // marginTop: 10,
  },
  input: {
    lineHeight: 22,
    fontSize: 16,
    // fontWeight: '300',
    // height: 40,
    color: '#000',
    paddingVertical: 0,
  },
});
