import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function EntradaPosts({setInputText, inputText}){
    return(
        <View style={styles.container}>
            <TextInput style={styles.dados}
            placeholder="No que Você esta Pensando?"
            multiline={true}
            onChangeText={setInputText}
            value={inputText}
            >
            </TextInput>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        borderWidth: 1,
        width: '90%',
        marginTop: 20,
        height: 250,
        borderRadius: 20,
    },
    dados:{
        width: '90%',
        height: 250,
    }
})
export default EntradaPosts;