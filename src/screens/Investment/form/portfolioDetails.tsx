import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Slider, TitleHeader} from '../component';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  AssetAllocation,
  FundList,
  PortfolioFacts,
  Chart,
  Divider,
} from '../component';

export const PortfolioDetails: React.FC = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{paddingBottom: 85}}>
        <View style={{padding: 20}}>
          <View style={styles.viewHeader}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={require('../../../assets/image/back.png')} />
            </TouchableOpacity>
            <AntDesign
              name="close"
              size={20}
              onPress={() => {
                navigation.removeListener;
                navigation.navigate('Invest');
              }}
            />
          </View>
          <TitleHeader
            title="Portfolio Details"
            subtitle="This portfolio is a typical retirement portfolio, suitable for strategic investors who are willing to
             tolerate some market risk in search for long term gains, usually with a mid to long term investment
             time horizon (5-10 years)."
            subSubtitle="Portfolio Overview  (Risk level 3)"
          />
          <Divider />
          <Text style={styles.textGrowth}>Growth & Income</Text>
        </View>
        <View style={{backgroundColor: 'red', width: '100%'}}></View>
        <Chart />
        <Text style={styles.performanceText}>
          Performance of USD 10,000 in the past 10 years
        </Text>
        <AssetAllocation />
        <FundList />
        <View style={styles.viewDownload}>
          <Image source={require('../../../assets/image/download.png')} />
          <Text style={styles.downloadText}>
            Download the pdf sheet to know more
          </Text>
        </View>
        <PortfolioFacts />
      </ScrollView>
      <View style={styles.stickySlider}>
        <Slider
          progress={0.7}
          onPressNext={() => navigation.navigate('GoalSummary')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  textGrowth: {
    color: '#000000',
    fontSize: 20,
    fontWeight: '700',
  },
  performanceText: {
    fontSize: 12,
    color: '#202020',
    margin: 20,
  },
  downloadText: {
    fontSize: 12,
    color: '#625EEE',
    textDecorationLine: 'underline',
    fontWeight: '700',
    marginLeft: 5,
  },
  viewDownload: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
    marginTop: 5,
  },
  stickySlider: {
    position: 'absolute',
    bottom: 0,
    zIndex: 1000,
    backgroundColor: '#fff',
    paddingBottom: 30,
  },
  viewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
