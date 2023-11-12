import React from "react";
import { Text, StyleSheet, Pressable } from 'react-native'

function BotaoPersonalizado({title, onPress}){
    return(
        <Pressable
        style={styles.button}
        onPress={onPress}
        >
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    button:{
        backgroundColor: '#3DDBE6',
        height: 40,
        width: 150,
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 20,
        margin: 10
    },
    title:{
        fontSize:18,
        margin: 8
    }
})
export default BotaoPersonalizado;