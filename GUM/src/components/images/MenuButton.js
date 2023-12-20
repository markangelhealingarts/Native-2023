import React from "react";
import {  SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,} from 'react-native'

const MenuButton = (props) =>{
    return (
        
          
              <View style={styles.container}>
                <TouchableOpacity
                onPress={()=> props.onPress?.() }
                  style={styles.button}
                  activeOpacity={0.5}>
                 <Text>...</Text>
                   
            
                </TouchableOpacity>
           </View>
      
      );
    };
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems:'left',
            left:350,
            bottom:100,
            right:10,
            top:-300
        },
        button:{
            borderRadius:10,
            justifyContent:'right',
            alignItems:'center',
            right:1
        },
        buttonText:{
            color:'black'
        }
    })
    export default MenuButton