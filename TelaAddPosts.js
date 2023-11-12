import React from "react";
import { View, Text, Image, StyleSheet, Pressable} from "react-native";
import { useNavigation } from "@react-navigation/native";
import EntradaPosts from "../componentes/EntradaPost";
import Botao from "../componentes/BotaoAdicionar";

function TelaAddPosts({onPress}){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <Pressable
            onPress={()=>{navigation.goBack()}}
            >
                <Image source={require('../assets/flecha.png')}/>
            </Pressable>
            <View style={styles.main}>
                <EntradaPosts/>
                <Botao/>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#2CB7E3',
        alignItems: 'center',
        justifyContent: 'center'
    },
    main:{
        height: 670,
        width: 330,
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 30,
        alignItems: 'center'
    }
})
export default TelaAddPosts;