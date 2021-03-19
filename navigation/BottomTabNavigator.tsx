import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import AirForceScreen from '../screens/AirForceScreen';
import JordanScreen from '../screens/JordanScreen';
import ReactRScreen from '../screens/ReactRScreen';
import AirSpoltomScreen from '../screens/AirSpoltomScreen';

AirSpoltomScreen
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Accueil"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Panier"
        component={TabTwoNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-cart" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator screenOptions={{
      headerShown: true
    }}>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{
          title: 'Snack Sneackers',
          color: "#4361ee",

        }}
      />
      <TabTwoStack.Screen
        name="AirForceScreen"
        component={AirForceScreen}
        options={{ title: 'Air Force' }}
      />

      <TabTwoStack.Screen
        name="JordanScreen"
        component={JordanScreen}
        options={{ title: 'Jordan Low 8Ride' }}
      />

      <TabTwoStack.Screen
        name="ReactRScreen"
        component={ReactRScreen}
        options={{ title: 'Nike React R' }}
      />

      <TabTwoStack.Screen
        name="AirSpoltomScreen"
        component={AirSpoltomScreen}
        options={{ title: 'Air Sloptom' }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator
      screenOptions={{
        headerShown: false
      }}>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Panier' }}
      />
    </TabTwoStack.Navigator>
  );
}
