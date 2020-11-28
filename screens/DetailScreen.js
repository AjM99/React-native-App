import React from 'react';
import{View,Text,Button,StyleSheet} from 'react-native';

const DetailScreen= ({navigation}) => 
{
  return (                
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.TextDesign}>This is thaa Detail Screen</Text>  
      
      <Button style={styles.TextDesign}
      title='press to open UltraDetail !!!'
      onPress={() =>navigation.navigate("UltraDetail")}
      />   

    </View>
  );
}

export default DetailScreen;
const styles = StyleSheet.create({  
 
    TextDesign:
    {
      marginBottom:5,
      padding:5
    },
})