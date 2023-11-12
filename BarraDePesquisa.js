import React from "react";
import { View, TextInput, StyleSheet, Image } from 'react-native'

function BarraDePesquisa({}){
    return(
        <View style={styles.container}>
            <TextInput
            style={styles.Barra}
            placeholder="Pesquisa"
            onChangeText={''}
            >
            </TextInput>
            <Image source={require('../assets/lupa.png')} style={styles.lupa}/>
        </View>
    )
}
const styles = StyleSheet.create({
    Barra:{
        width: 310,
        marginLeft: 10,
        marginTop: 5,
        backgroundColor: 'white',
        height: 40,
        borderRadius: 10,
        borderWidth: 1
    },
    container:{
        flexDirection: 'row',
        height: 50
    },
    lupa:{
        marginLeft: 12,
        marginTop: 5,
        backgroundColor: 'white',
        height: 40,
        width: 40,
        borderRadius: 10,
        borderWidth: 1
    }
})
export default BarraDePesquisa;