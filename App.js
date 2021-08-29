import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Current from './screens/Current';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import CityWise from './screens/CityWise';

export default function App() {
  const Tab = createMaterialBottomTabNavigator()

  return (
    <NavigationContainer>
      <Tab.Navigator labeled={false} barStyle={{backgroundColor:"#3399FF"}} activeColor="black">
        <Tab.Screen
        name="Current" 
        component={Current}
        options={{
          tabBarIcon: ({color, size}) =>(
            <MaterialCommunityIcons
            name="home"
            color={color}
            size={26}
            />
          )
        }}
        />

      <Tab.Screen
        name="CityWise" 
        component={CityWise}
        options={{
          tabBarIcon: ({color, size})=>(
            <MaterialCommunityIcons
            name="city" color={color}
            size={26}
            />
          )
        }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
