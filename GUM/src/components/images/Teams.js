
import React, {useCallback} from 'react';
import {StyleSheet,Button,View,SafeAreaView,Alert,TextInput, Image,Text,Linking,Pressable,TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomButton4 from './CustomButton4';



const link1 = 'https://www.paypal.com/paypalme/getupandmove?country.x=US&locale.x=en_US';
const link2='https://www.paypal.com/paypalme/getupandmove?country.x=US&locale.x=en_US'


const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
  
};

const Teams = ({navigation}) => {
  const Stack = createNativeStackNavigator();

  return(
    
    <View style = {styles.container}>
        <Image
   source={require('./newLogo.png')}
   style={{left:140,bottom:50,
   justifyContent:'right'}}
/>
      
      <TouchableOpacity>
                  <View style = {styles.button}>
                  <Text style={styles.buttonText}>
                    
                  <OpenURLButton  title="Create Teams" url={link1}>Create Teams</OpenURLButton></Text></View></TouchableOpacity>
                  <CustomButton4 title="Join Team" onPress={()=> navigation.push("JoinTeam")}></CustomButton4>
                  <CustomButton4 title="Current Teams" onPress={()=> navigation.push("CurrentTeams")}></CustomButton4>
                  <CustomButton4 title="About Teams" onPress={()=> navigation.push("AboutTeams")}></CustomButton4>
                  <TouchableOpacity></TouchableOpacity>
                  <View style = {styles.button}>
                  
                  <TouchableOpacity>
                  <OpenURLButton url={link2}>Paypal</OpenURLButton></TouchableOpacity>
                  
               </View>
      
              
 

      <Text testID="pressable_press_console"></Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'deepskyblue',
  },
button:{
    borderRadius:8,
    margin:10,
    padding:1,
    backgroundColor:'darkseagreen',
    justifyContent:'center',
    alignItems:'center'

},
buttonText:{
  color:'black',
  size:1
}
});

export default Teams