
import { StyleSheet, Button, View, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CustomButton4 from "./CustomButton4";
const UpdateSchedule=({navigation})=> {
  
  const [date, setDate] = useState(new Date());

 
  var timeObject = new Date()     
  var seconds = timeObject.getSeconds() + 10;
  timeObject = timeObject + seconds;
  var request = {
    channelId: "channel-id",
    id: "testNotify",
    body: "Local notification!",
  title: "Local Notification Title",
  sound: "chime.aiff",
  silent: false,
  category: "SOME_CATEGORY",
  userInfo:  useState.email,
  fireDate: timeObject,}

  const onChange = (e, selectedDate) => {
    setDate(selectedDate);
  };
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <Text>Update your moving schedule!</Text>

<Text>Workout 1:</Text>
      <DateTimePicker
      
        value={date}
        
        mode={""}
        is24Hour={true}
        onChange={onChange}
        style={styles.button}
      />
      <Text>Workout 2:</Text>
      <DateTimePicker
        value={date}
        mode={"time"}
        is24Hour={true}
        onChange={onChange}
        style={styles.button}
      />
      <Text>Workout 3:</Text>
     <DateTimePicker
        value={date}
        mode={"time"}
        is24Hour={true}
        onChange={onChange}
        style={styles.button}
      />
      <Text>Workout 4:</Text>
      <DateTimePicker
        value={date}
        mode={"time"}
        is24Hour={true}
        onChange={onChange}
        style={styles.button}
      />
      <Text>Workout 5:</Text>
      <DateTimePicker
        value={date}
        mode={"time"}
        is24Hour={true}
        onChange={onChange}
        style={styles.button}
      />
      <Text>Workout 6:</Text>
      <DateTimePicker
        value={date}
        mode={"time"}
        is24Hour={true}
        display="default"
        onChange={onChange}
        style={styles.button}
      />
      <CustomButton4 title=" Add Time" onPress={()=> navigation.navigate("Home")}></CustomButton4>
       
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'deepskyblue',
  },
    button:{
      borderRadius:10,
      padding:1,
      backgroundColor:'darkseagreen',
      justifyContent:'left',
      alignItems:'center'
 
    
    }
  });export default UpdateSchedule