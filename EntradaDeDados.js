import React from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native'

function EntradaDeDados({label, setFunction}){
    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.dados}
            placeholder="insira os dados"  
            onChangeText={setFunction}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        margin: 10
    },
    label:{
        textAlign: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        margin: 5
    },
    dados:{
        backgroundColor:'white',
        height: 40,
        textAlign:'center',
        borderRadius: 30,
        width: 290,
    }
})
export default EntradaDeDados;