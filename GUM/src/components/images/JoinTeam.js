import React from 'react';
import {StyleSheet,Button,View,SafeAreaView,Alert,TextInput, Image,Text,TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const JoinTeam = ({navigation})=>{
 
        const Stack = createNativeStackNavigator();
        return(
          <View style = {styles.container}>
        
          <View style={styles.logBox}>
            
          </View>
        
             <Image source={require('./newLogo.png')}/>
              <Text>
              <Text>Invite Code</Text></Text>
             <TextInput
               style={{
                 height: 40,
                 borderColor: 'gray',
                 borderWidth: 1,
               }}
               placeholder="000000"
               />
                      <TextInput
                 style={{
                   height: 40,
                   borderColor: 'gray',
                   borderWidth: 1,
                 }}
                 placeholder="Password"
               />
                       <Button title="Join Group" onPress={()=> navigation.navigate("JoinTeam")}></Button>   
                       <View style={styles.container}>
          <View style={styles.logBox}>
            <Text testID="pressable_press_console"></Text>
          </View>
        </View> 
          
                  </View>
                      
                
        );
    };
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        padding:2,
        marginHorizontal: 16,
        borderColor:'blue'
      },
      wrapperCustom: {
        borderRadius: 8,
        padding: 6,
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        padding:2,
        marginHorizontal: 16,
        borderColor:'blue'
      },
      wrapperCustom: {
        borderRadius: 8,
        padding: 6,
      },
      container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'deepskyblue',
      },
    
    
    })
    

    
   export default JoinTeam