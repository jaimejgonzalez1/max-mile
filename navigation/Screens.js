import React from 'react'
import { Easing, Animated, Dimensions } from 'react-native'

import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Block, Text } from 'galio-framework'

// screens
import Onboarding from '../screens/Onboarding'
import Social from '../screens/Social'
import Run from '../screens/Run'
import Pro from '../screens/Advertisement'
import Profile from '../screens/Profile'
import Account from '../screens/Account'
import CustomDrawerContent from './Menu'

// header for screens
import { Icon, Header } from '../components'
import { argonTheme, tabs } from '../constants'

const { width } = Dimensions.get('screen')

const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

function RunStack(props) {
  return (
    <Stack.Navigator mode='card' headerMode='screen'>
      <Stack.Screen
        name='Run'
        component={Run}
        options={{
          header: ({ navigation, scene }) => <Header back title='' transparent white navigation={navigation} scene={scene} />,
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name='Pro'
        component={Pro}
        options={{
          header: ({ navigation, scene }) => <Header title='' back white transparent navigation={navigation} scene={scene} />,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  )
}

function SocialStack(props) {
  return (
    <Stack.Navigator mode='card' headerMode='screen'>
      <Stack.Screen
        name='Social'
        component={Social}
        options={{
          header: ({ navigation, scene }) => <Header transparent white title='' navigation={navigation} scene={scene} />,
          cardStyle: { backgroundColor: '#F8F9FE' },
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  )
}

function HomeStack(props) {
  return (
    <Stack.Navigator initialRouteName='Home' mode='card' headerMode='screen'>
      <Stack.Screen
        name='Home'
        component={Profile}
        options={{
          header: ({ navigation, scene }) => <Header transparent white title='' navigation={navigation} scene={scene} />,
          cardStyle: { backgroundColor: '#FFFFFF' },
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  )
}

function AccountStack(props) {
  return (
    <Stack.Navigator initialRouteName='Home' mode='card' headerMode='screen'>
      <Stack.Screen
        name='Account'
        component={Account}
        options={{
          header: ({ navigation, scene }) => <Header transparent white title='' navigation={navigation} scene={scene} />,
          cardStyle: { backgroundColor: '#FFFFFF' },
          headerTransparent: true,
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  )
}

export default function LaunchingStack(props) {
  return (
    <Stack.Navigator mode='card' headerMode='none'>
      {/* <Stack.Screen
        name='Onboarding'
        component={Onboarding}
        option={{
          headerTransparent: true,
        }}
      /> */}
      <Stack.Screen name='App' component={AppStack} />
    </Stack.Navigator>
  )
}

function AppStack(props) {
  return (
    <Drawer.Navigator
      style={{ flex: 1 }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: 'white',
        width: width * 0.8,
      }}
      drawerContentOptions={{
        activeTintcolor: 'white',
        inactiveTintColor: '#000',
        activeBackgroundColor: 'transparent',
        itemStyle: {
          width: width * 0.75,
          backgroundColor: 'transparent',
          paddingVertical: 16,
          paddingHorizonal: 12,
          justifyContent: 'center',
          alignContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        },
        labelStyle: {
          fontSize: 18,
          marginLeft: 12,
          fontWeight: 'normal',
        },
      }}
      initialRouteName='Home'
    >
      <Drawer.Screen name='Home' component={HomeStack} />
      <Drawer.Screen name='Run' component={RunStack} />
      <Drawer.Screen name='Social' component={SocialStack} />
      <Drawer.Screen name='Account' component={AccountStack} />
    </Drawer.Navigator>
  )
}
