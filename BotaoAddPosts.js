import React from "react";
import { StyleSheet, Pressable, Button, Text} from 'react-native'
import { useNavigation } from "@react-navigation/native";

function BotaoAddPosts({title, onPress}){

    const navigation = useNavigation()

    return(
        <Pressable
        style={styles.Button}
        onPress={onPress}
        >
            <Text style={styles.add}>{title}</Text>
        </Pressable>
    )
} const styles = StyleSheet.create({
    Button:{
        backgroundColor: '#2CB7E3',
        height: 60,
        width: 60,
        marginLeft: '76%',
        marginTop: 570,
        borderRadius: 25,
    },
    add:{
        fontSize: 50,
        textAlign: 'center',
        marginTop: -3
    }
})
export default BotaoAddPosts;