import * as React from 'react';
import { View,Button,StyleSheet } from 'react-native';
//import ProfileImg from './assets/ME.jpg'
import { DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import{Avatar,Text,Title,Caption,Drawer,praragraph,TouchableRipple,Switch, Paragraph} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export function DrawerContent(props)
{
    return(
        <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View  style={styles.drawerContent}>
                <View style={styles.userInfoDesign}>
                    <View style={{flexDirection:'row',marginTop:20}}>
                        <Avatar.Image
                            source={{uri:'https://www.wallpaperup.com/39828/nature_sea_ocean_coast_shore_sky_clouds_stone_rock.html' }}
                            size={50}     
                        />

                    <View style={{marginLeft:20}}>
                        <Title style={styles.titleDesign}>Anuj More</Title>
                        <Caption style={styles.captionDesign}>Aj.M</Caption>
                    </View>
                    </View>
                    
                <View style={styles.rowDesign}>
                    <View>
                            <Text style={{fontSize:17,fontWeight:'bold'}}>Followers</Text>
                            <Paragraph>      12M </Paragraph>
                            
                    </View>
                    <View style={{marginLeft:60}}>
                        <Text style={{fontSize:17,fontWeight:'bold'}}>Following</Text>
                        <Text>           200</Text>
                    </View>
                </View>    
                </View>   
                
                

                <Drawer.Section style={{marginTop:30}}> 
                
                <DrawerItem
                icon={({color,size}) =>(
                    <Icon
                    name='home'
                    color={color}
                    size={size}
                    />
                )}
                label= "Home"
                onPress={() =>{props.navigation.navigate('Home')}}
                />
                <DrawerItem
                icon={({color,size}) =>(
                    <Icon
                    name='bookmark'
                    color={color}
                    size={size}
                    />
                )}
                label= "BookMark"  
                onPress={() =>{props.navigation.navigate('BookMarkScreen')}}              
                />
                <DrawerItem
                icon={({color,size}) =>(
                    <Icon
                    name='laptop'
                    color={color}
                    size={size}
                    />
                )}
                label= "Setting"
                onPress={() =>{props.navigation.navigate('SettingScreen')}}
                />
                <DrawerItem
                icon={({color,size}) =>(
                    <Icon
                    name='account'
                    color={color}
                    size={size}
                    />
                )}
                label= "Profile"
                onPress={() =>{props.navigation.navigate('Profile')}}
                />
                </Drawer.Section>  

            </View>
 
            



        </DrawerContentScrollView>
        <Drawer.Section style ={styles.bottomDrawerDesign}>
            <DrawerItem
                icon={({color,size}) =>(
                    <Icon
                    name='emoticon-neutral-outline'
                    color={color}
                    size={size}
                    />
                )}

                label= "Sign out"
            />
            


        </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent:
    {
        flex:1
    },
    userInfoDesign:
    {
        paddingLeft:20,
    },
    titleDesign:
    {
        fontSize:23,
        marginTop:3,
        //fontWeight:'bold',
        //flexDirection:'column',
        
    },
    captionDesign:
    {
        fontSize:14,
        lineHeight:14,
    },
    AvatarDesign:
    {
       // flexDirection:'row',
       // marginTop:20
    },
    rowDesign:
    {
        marginTop:30,
        flexDirection:'row',
        alignItems : 'center',
    },
    sectionDesign:
    {
        flexDirection:'row',
        alignItems:'center',
        marginRight:15,
    },
    paragraphDesign:
    {
        fontWeight:'bold',
        marginRight:3,
    },
   /*drawerDesigning:
   {
       marginTop:15,
   },*/
   bottomDrawerDesign:
   {
       marginTop:15,
       borderTopColor:'#ffffff',
       borderTopWidth:1
   },
   preference:
   {
       flexDirection:'row',
       justifyContent:'space-between',
       paddingVertical:12,
       paddingHorizontal:16,
   },
    
})