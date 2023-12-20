import {View,Text,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { auth,firestore } from '../../../../../firebase';
import CustomButton4 from './CustomButton4';
import React from 'react';

const DeleteUser = ({navigation}) =>{

    const handleDelete = () => {
     auth().delete().then(() => {
            
            console.log("Successfully deleted user");

            Alert.alert("User " +email+ " deleted!")
            navigation.navigate("Main")
            
          })
          .catch(function(error) {
            console.log("Error deleting user:", error);
          })
          auth().delete().then(() => {
            
            console.log("Successfully deleted user");

            Alert.alert("User " +email+ " deleted!")
            navigation.navigate("Main")
            
          })
          .catch(function(error) {
            console.log("Error deleting user:", error);
          })
        };
    const Stack = createStackNavigator();
     return (
        
          
        <View style={styles.container}>
   <CustomButton4  title="Delete User" onPress={handleDelete} />
     </View>

     )

    };export default DeleteUser;
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'deepskyblue',
     // if you want to fill rows left to right
      },
    
    button:{
        borderRadius:10,
        padding:10,
        backgroundColor:'red',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:'#ggg'
    }
})
