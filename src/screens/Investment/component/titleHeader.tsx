import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface TitleHeaderProps {
  title: string;
  subtitle: string;
  subSubtitle?: string;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({
  title,
  subtitle,
  subSubtitle,
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      {subSubtitle && <Text style={styles.subSubtitle}>{subSubtitle}</Text>}
      <Text style={styles.subTitle}>{subtitle}</Text>
    </View>
  );
};

export default TitleHeader;

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: '600',
    marginVertical: 10,
    color: '#202020',
  },
  subSubtitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#20202080',
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '300',
    lineHeight: 22,
    color: '#202020',
  },
});
