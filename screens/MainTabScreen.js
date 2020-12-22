//this is entirely for the BOTTOM TAB menu and navigation
import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text,Button,StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';// for navigating between screens
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


//screen importing
import HomeScreen from './HomeScreen';
import DetailScreen from './DetailScreen';
import UltraDetailScreen from './UltraDetailScreen';
import LOLScreen from './LOLScreen';
import ProfileScreen from './ProfileScreen';
import SettingScreen from './SettingScreen';


// after importing we have to declare all constants for the imported stuff
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const UltraDetailStack = createStackNavigator();
const LOLStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const SettingStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen =() =>
(
               // for bottom navigation
        <Tab.Navigator
        initialRouteName="Home"
        inactiveColor="#e6e6e6"
        activeColor="black"
        style={{ backgroundColor: '#ffff66' }}
      >
        <Tab.Screen
          name="Home"
          component={HomeStackScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarColor:'#ffff66',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Details"
          component={DetailStackScreen}
          options={{
            tabBarLabel: 'Wall',
            tabBarColor:'#80b3ff',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="access-point" color={color} size={26} />
            ),
          }}
        />
        
        <Tab.Screen
          name="LOL"
          component={LOLStackScreen}
          options={{
            tabBarLabel: 'Explore',
            tabBarColor:'#ff66cc',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-group" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="UltraDetail"
          component={UltraDetailStackScreen}
          options={{
            tabBarLabel: 'Notification',
            tabBarColor:'#d11aff',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileStackScreen}
          options={{
            tabBarLabel: 'Profile',
            tabBarColor:'#00e600',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    );
        
export default MainTabScreen;

const  HomeStackScreen=({navigation}) =>
{ 
  return(
    <HomeStack.Navigator screenOptions={{       //screen options arediffent than stylesheet/style
      headerStyle:
      {
        backgroundColor:'#ffff00'
      },
      headerTintColor:'#000000',//header tint is title color
      headerTitleStyle:
      {
        fontWeight:'bold',
      }
      }}> 
        <HomeStack.Screen  //stack navi is for creating screen 
        name="Home" component={HomeScreen} 
          options={{
          headerLeft:()=>
          (
            <Ionicons.Button name='ios-menu' size={25} 
              backgroundColor="#ffff00"
              color ='black'
              onPress={() => navigation.openDrawer()}         
            />
          )
          
        }}
        /> 
    </HomeStack.Navigator>
  )
  
}

const  DetailStackScreen=({navigation}) =>
{
  return(
    <DetailStack.Navigator screenOptions={{       
      headerStyle:
      {
        backgroundColor:'#80b3ff'
      },
      headerTintColor:'#000000',
      headerTitleStyle:
      {
        fontWeight:'bold',
      }
      }}> 
        <DetailStack.Screen  
        name="Wall" component={DetailScreen} 
        options={{
          headerLeft:()=>
          (
            <Ionicons.Button name='ios-menu' size={25} 
              backgroundColor="#80b3ff"
              color ='black'
              onPress={() => navigation.openDrawer()}         
            />
          )
          
        }}
        /> 
    </DetailStack.Navigator>
  )
}


const  UltraDetailStackScreen=({navigation}) =>
{
  return(
    <UltraDetailStack.Navigator screenOptions={{       
      headerStyle:
      {
        backgroundColor:'#d11aff'
      },
      headerTintColor:'#000000',
      headerTitleStyle:
      {
        fontWeight:'bold',
      }
      }}> 
        <UltraDetailStack.Screen  
        name="Notification" component={UltraDetailScreen} 
        options={{
          headerLeft:()=>
          (
            <Ionicons.Button name='ios-menu' size={25} 
              backgroundColor="#d11aff"
              color ='black'
              onPress={() => navigation.openDrawer()}         
            />
          )
          
        }}
        /> 
    </UltraDetailStack.Navigator>
  )
}

const LOLStackScreen=({navigation}) =>
{
  return(
    <LOLStack.Navigator screenOptions={{       
      headerStyle:
      {
        backgroundColor:'#ff66cc'
      },
      headerTintColor:'#000000',
      headerTitleStyle:
      {
        fontWeight:'bold',
      }
      }}> 
        <LOLStack.Screen  
        name="Explore" component={LOLScreen} 
        options={{
          headerLeft:()=>
          (
            <Ionicons.Button name='ios-menu' size={25} 
              backgroundColor="#ff66cc"
              color ='black'
              onPress={() => navigation.openDrawer()}         
            />
          )
          
        }}
        /> 
    </LOLStack.Navigator>
  )
}

const ProfileStackScreen=({navigation}) =>
{
  return(
    <ProfileStack.Navigator screenOptions={{       
      headerStyle:
      {
        backgroundColor:'#00e600'
      },
      headerTintColor:'#000000',
      headerTitleStyle:
      {
        fontWeight:'bold',
      }
      }}> 
        <ProfileStack.Screen  
        name="Profile !" component={ProfileScreen} 
         options={{
          headerLeft:()=>
          (
            <Ionicons.Button 
              name='ios-menu' 
              size={25} 
              backgroundColor="#00e600"
              color ='black'
              onPress={() => navigation.openDrawer()}         
            />
          )
          
        }}
        /> 
    </ProfileStack.Navigator>
  )
}

const SettingStackScreen=({navigation}) =>
{
  return(
    <SettingStack.Navigator screenOptions={{       
      headerStyle:
      {
        backgroundColor:'#00e600'
      },
      headerTintColor:'#000000',
      headerTitleStyle:
      {
        fontWeight:'bold',
      }
      }}> 
        <SettingStack.Screen  
        name="Setting !" component={SettingScreen} 
         options={{
          headerLeft:()=>
          (
            <Ionicons.Button 
              name='ios-menu' 
              size={25} 
              backgroundColor="#00e600"
              color ='black'
              onPress={() => navigation.openDrawer()}         
            />
          )
          
        }}
        /> 
    </SettingStack.Navigator>
  )
}

