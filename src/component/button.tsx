import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from 'react-native';

type ButtonProps = {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
};

const Button: React.FC<ButtonProps> = ({label, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.labelButton}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#625EEE',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 13,
    width: '100%',
  },
  labelButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
