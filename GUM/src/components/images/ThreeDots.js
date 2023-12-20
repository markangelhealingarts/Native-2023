import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
 Menu,
 MenuProvider,
 MenuOptions,
 MenuOption,
 MenuTrigger,
} from "react-native-popup-menu";

const ThreeDots = () => {
 return (
   <MenuProvider style={styles.container}>
     <Menu>
       <MenuTrigger
         text="Click for Option menu"
         customStyles={{
           triggerWrapper: {
             top: -20,
           },
         }}
       />
       <MenuOptions>
       
         <MenuOption onPress={() =>  navigation.navigate("Home")} />
         <MenuOption onSelect={() => alert(`Gum`)} text="Delete" />
       </MenuOptions>
     </Menu>
   </MenuProvider>
 );
};

export default ThreeDots;

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: "#fff",
   justifyContent: "center",
   alignItems: "center",
   padding: 30,
   flexDirection: "column",
 },
});