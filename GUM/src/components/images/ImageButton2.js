import React from "react";
import {  SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,} from 'react-native'

const ImageButton2 = (props) =>{
    return (
        
          
              <View style={styles.container}>
                <TouchableOpacity
                onPress={()=> props.onPress?.() }
                  style={styles.button}
                  activeOpacity={0.5}>
                  <Image source={require('./calendar.png')}/>
                   <Text style={styles.buttonText}>
                    
            UpdateSchedule
            </Text>
                </TouchableOpacity>
           </View>
      
      );
    };
    const styles = StyleSheet.create({
        container: {
            flex: 1,
         
        },
        button:{
            borderRadius:30,
            padding:10,
            margin:10,
            marginTop:10,
            width: 130,
            height: 130,
            backgroundColor:'darkseagreen',
            justifyContent:'left',
            alignItems:'center'
        },
        buttonText:{
            color:'black'
        }
    })
    
    export default ImageButton2