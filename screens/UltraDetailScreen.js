
import React from 'react';
import{View,Text,Button,StyleSheet} from 'react-native';

const UltraDetailScreen= ({navigation}) => 
{
  return (                
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.AppDesign}>This is thaa UltraDetail Screen</Text>    

      <Button style={styles.AppDesign}
      title='LOL !!!'
      onPress={() =>navigation.navigate("LOL")}
      /> 
    </View>
  );
}

export default UltraDetailScreen;
const styles = StyleSheet.create({  
 
    AppDesign:
    {
      marginBottom:5,
      padding:5
    },
})