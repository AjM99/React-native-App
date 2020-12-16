import * as React from 'react';
import { View,Button,StyleSheet } from 'react-native';
//import ProfileImg from './assets/ME.jpg'
import { DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import{Avatar,Text,Title,Caption,Drawer,praragraph,TouchableRipple,Switch} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export function DrawerContent(props)
{
    return(
        <View style={{flex:1}}>
        <DrawerContentScrollView {...props}>
            <View  style={styles.drawerContent}>
                <View style={styles.userInfoDesign}>
                    <View>
                        <Avatar.Image
                            source={{uri:'https://www.wallpaperup.com/39828/nature_sea_ocean_coast_shore_sky_clouds_stone_rock.html' }}
                            size={50}     
                             
                        />
                    </View>
                </View>
                
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
        fontSize:16,
        marginTop:3,
        fontWeight:'bold',
    },
    captionDesign:
    {
        fontSize:14,
        lineHeight:14,
    },
    rowDesign:
    {
        marginTop:20,
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
   drawerDesign:
   {
       marginTop:15,
   },
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