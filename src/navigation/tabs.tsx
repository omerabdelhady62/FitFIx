import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home} from '../screens/home';
import {Image, ImageSourcePropType} from 'react-native';
import {InvestmentStack} from './stack/investment';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native'; // To get the active route

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  tabBarActiveTintColor: '#625EEE',
  tabBarInactiveTintColor: '#8D8D90',
  tabBarLabelStyle: {
    fontSize: 10,
  },
  headerShown: false,
};

const renderTabBarIcon =
  (iconSource: ImageSourcePropType | undefined) =>
  ({color}: any) =>
    <Image source={iconSource} style={{tintColor: color}} />;

export const TabsButton = () => {
  return (
    <Tab.Navigator screenOptions={tabBarOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: renderTabBarIcon(
            require('../assets/image/tabs/home.png'),
          ),
        }}
      />
      <Tab.Screen
        name="Investment"
        component={InvestmentStack}
        options={({route}) => ({
          tabBarIcon: renderTabBarIcon(
            require('../assets/image/tabs/investment.png'),
          ),
          // Conditionally hide the tab bar on CreateGoal screen
          tabBarStyle: getTabBarVisibility(route),
        })}
      />
      <Tab.Screen
        name="Savings"
        component={Home}
        options={{
          tabBarIcon: renderTabBarIcon(
            require('../assets/image/tabs/savings.png'),
          ),
        }}
      />
      <Tab.Screen
        name="Services"
        component={Home}
        options={{
          tabBarIcon: renderTabBarIcon(
            require('../assets/image/tabs/services.png'),
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Home}
        options={{
          tabBarIcon: renderTabBarIcon(
            require('../assets/image/tabs/settings.png'),
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// Helper function to determine tab bar visibility
const getTabBarVisibility = (route: any) => {
  const routeName = getFocusedRouteNameFromRoute(route) ?? 'Invest';

  if (
    routeName === 'CreateGoal' ||
    routeName === 'InitialAmount' ||
    routeName === 'GoalSummary' ||
    routeName === 'PortfolioDetails'
  ) {
    return {display: 'none'}; // Hide the tab bar
  }

  return undefined; // Show the tab bar by default
};
