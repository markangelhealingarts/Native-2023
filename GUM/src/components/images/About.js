import React from 'react';

import {StyleSheet,Button,View,SafeAreaView,Alert,TextInput, Image,Text,TouchableOpacity} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const About = ({navigation})=>{
    return(
        <Text style={{color: 'blue'}}
      onPress={() => Linking.openURL('"https://getupandmove.net/pages/contact.html')}>
</Text>

    );
};
    
   export default About