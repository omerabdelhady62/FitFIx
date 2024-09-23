import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Investment} from '../../screens/Investment';
import {CreateGoal} from '../../screens/Investment/form/createGoal';
import {InitialAmount} from '../../screens/Investment/form/InitialAmount';
import {PortfolioDetails} from '../../screens/Investment/form/portfolioDetails';
import {GoalSummary} from '../../screens/Investment/summary';
import {useForm, FormProvider} from 'react-hook-form';

export type RootStackInvestment = {
  Invest: String;
  CreateGoal: String;
  InitialAmount: String;
  PortfolioDetails: String;
  GoalSummary: String;
};
const Stack = createStackNavigator<RootStackInvestment>();

export const InvestmentStack = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <Stack.Navigator
        initialRouteName="Invest"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Invest" component={Investment} />
        <Stack.Screen name="CreateGoal" component={CreateGoal} />
        <Stack.Screen name="InitialAmount" component={InitialAmount} />
        <Stack.Screen name="PortfolioDetails" component={PortfolioDetails} />
        <Stack.Screen name="GoalSummary" component={GoalSummary} />
      </Stack.Navigator>
    </FormProvider>
  );
};
