// In App.js in a new project

import * as React from 'react';
import { View, Text,Button,StyleSheet, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';// for left slide
import MainTabScreen from './screens/MainTabScreen';
import { DrawerContent } from "./screens/Drawer";
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import BookMarkScreen from './screens/BookMarkScreen';
import { useEffect } from 'react';

const Drawer = createDrawerNavigator();

const  App = () => 
{
  const[isLoading,setIsLoading] = React.useState(true);
  const[userToken,setUserToken] = React.useState(null);
  
  useEffect(() =>{
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);   
  }, []);
  if(isLoading)
  {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    )
  }
  return (
    <NavigationContainer>
     <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
      <Drawer.Screen name="SettingScreen" component={SettingScreen} />
      <Drawer.Screen name="BookMarkScreen" component={BookMarkScreen} />
     </Drawer.Navigator>
      {/*<Stack.Navigator screenOptions={{       //screen options arediffent than stylesheet/style
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
        <Stack.Screen  //stack navi is for creating screen 
        name="Home" component={HomeScreen} 
        /> 
        <Stack.Screen  name="Detail" component={DetailScreen}  /> 
        <Stack.Screen  name="UltraDetail" component={UltraDetailScreen}  /> 
    </Stack.Navigator>*/}
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({  
 
  AppDesign:
  {
    marginBottom:5,
    padding:5
  },
  
})
export default App;