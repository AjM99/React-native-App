import React from 'react';
import{View,Text,Button,StyleSheet} from 'react-native';

const DetailScreen= ({navigation}) => 
{
  return (                
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.AppDesign}>This is thaa Detail Screen</Text>  
      
      <Button style={styles.AppDesign}
      title='press to open UltraDetail !!!'
      onPress={() =>navigation.navigate("UltraDetail")}
      />   

    </View>
  );
}

export default DetailScreen;
const styles = StyleSheet.create({  
 
    AppDesign:
    {
      marginBottom:5,
      padding:5
    },
})