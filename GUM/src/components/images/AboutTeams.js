
import React, {useCallback} from 'react';
import {StyleSheet,Button,View,SafeAreaView,Alert,TextInput, Image,Text,TouchableOpacity,Linking} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const supportedURL = 'https://www.paypal.com/paypalme/getupandmove?country.x=US&locale.x=en_US';


const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

const AboutTeams = () => {
  return (
    <View style={styles.container}>
        <Text>You can create Groups with your team, friends, and clients. The groups will help you to keep track of all your
            members, tidbits and longevity points. You can create, join, or track the progress of your groups.
            Get up and Move also teaches communities how to be fit.Feel free to donate.
        </Text>
      <OpenURLButton url={supportedURL}>Donate</OpenURLButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'deepskyblue',
  },
});


   export default AboutTeams