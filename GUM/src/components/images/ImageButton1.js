import React from "react";
import {  SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,} from 'react-native'

const ImageButton1 = (props) =>{
    return (
              <View style={styles.container}>
                <TouchableOpacity
                onPress={()=> props.onPress?.() }
                  style={styles.button}
                  activeOpacity={0.5}>
                  <Image source={require('./camcorder.png')}/>
                   <Text style={styles.buttonText}>
                    
            Teaching Demos
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
            width: 100,
            height: 100,
            marginTop:10,
            backgroundColor:'darkseagreen',
            justifyContent:'left',
            alignItems:'center'
        },
        buttonText:{
            color:'black'
        }
    })
        
        
  
    
    export default ImageButton1