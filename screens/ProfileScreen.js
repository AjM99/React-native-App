import React from 'react';
import{View,Text,Button,StyleSheet} from 'react-native';

const ProfileScreen= ({navigation}) => 
{
  return (                
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.AppDesign}>This is thaa Profile Screen</Text>    

    </View>
  );
}

export default ProfileScreen;
const styles = StyleSheet.create({  
 
    AppDesign:
    {
      marginBottom:5,
      padding:5
    },
})

