import React from "react";
import {  SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,} from 'react-native'

const ImageButton3 = (props) =>{
    return (
        
          
              <View style={styles.container}>
                <TouchableOpacity
                onPress={()=> props.onPress?.() }
                  style={styles.button}
                  activeOpacity={0.5}>
                  <Image source={require('./people.png')}/>
                   <Text style={styles.buttonText}>
                    
            Teams
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
            width: 100,
            height: 110,
            
            backgroundColor:'darkseagreen',
            justifyContent:'left',
            alignItems:'center'
            },
            buttonText:{
                color:'black'
            }
        })
    export default ImageButton3