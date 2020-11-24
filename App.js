// In App.js in a new project

import * as React from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';// for navigating between screens
import { createDrawerNavigator } from '@react-navigation/drawer';// for left slide
import Ionicons from 'react-native-vector-icons/Ionicons';


const HomeScreen =({navigation}) => 
{
  return (                // this will have things that will appear screen
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is thaa Home Screen</Text>  
      <Button style={styles.AppDesign}
      title='press to open Detail !!'
      onPress={() =>navigation.navigate("Detail")//the name Detail should be same as screeen
               }
      />
    </View>
  );
}




const DetailScreen= ({navigation}) => 
{
  return (                
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is thaa Detail Screen</Text>  
      
      <Button style={styles.AppDesign}
      title='press to open UltraDetail !!!'
      onPress={() =>navigation.navigate("UltraDetail")}
      />   

    </View>
  );
}





const UltraDetailScreen= ({navigation}) => 
{
  return (                
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.AppDesign}>This is thaa UltraDetail Screen</Text>    

    </View>
  );
}

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
        name="Home" component={HomeScreen} options={{
          title:'Overview',
          headerLeft:()=>
          (
            <Ionicons.Button name='add.' size={20} marginleft={50} />
          )
          
        }}
        /> 
    </HomeStack.Navigator>
  )
  
}

const  DetailStackScreen=({navigation}) =>
{
  return(
    <DetailStack.Navigator screenOptions={{       //screen options arediffent than stylesheet/style
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
        <DetailStack.Screen  //stack navi is for creating screen 
        name="    Detail" component={DetailScreen} 
        /> 
    </DetailStack.Navigator>
  )
}



// after importing we have to declare all constants for the imported stuff
const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();



const  App = () => 
{
  return (
    <NavigationContainer>
     <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStackScreen} />
      <Drawer.Screen name="Detail" component={DetailStackScreen} />
      <Drawer.Screen name="UltraDetail" component={UltraDetailScreen} />
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
    marginBottom:50,
    padding:5
  },
  
})
export default App;