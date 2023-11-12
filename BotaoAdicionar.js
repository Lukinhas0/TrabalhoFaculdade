import React from "react";
import { Pressable, View, Text, StyleSheet } from "react-native";

function Botao({onPress}){
    return(
        <Pressable
        style={styles.Button}
        onPress={onPress}
        >
            <Text>Adicionar</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    Button:{
        backgroundColor: '#2CB7E3',
        width: 230,
        height: 35,
        marginTop: 20,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default Botao;