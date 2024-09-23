import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {TabsButton} from './tabs';
import {createClient, AnalyticsProvider} from '@segment/analytics-react-native';
import {SEGMENT_KEY} from '@env';

export default function Navigation() {
  const Stack = createNativeStackNavigator();

  // Initialize Segment client
  const segmentClient = createClient({
    writeKey: SEGMENT_KEY,
  });

  return (
    // Wrap your entire app with the AnalyticsProvider
    <AnalyticsProvider client={segmentClient}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="TabsButton" component={TabsButton} />
        </Stack.Navigator>
      </NavigationContainer>
    </AnalyticsProvider>
  );
}
