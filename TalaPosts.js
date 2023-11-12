import React, { useState } from "react";
import { View, StyleSheet, Text, Image, FlatList } from 'react-native'
import { useNavigation } from "@react-navigation/native"
import CabecarioPosts from "../componentes/headerPosts";
import BotaoAddPosts from "../componentes/BotaoAddPosts";
import BarraDePesquisa from "../componentes/BarraDePesquisa";

function TelaPosts({route}){

    const navigation  = useNavigation()

    function AddPost(){
            navigation.navigate('TelaAddPosts')
    }

    return(
        <View style={styles.container}>
            <CabecarioPosts/>
            <BarraDePesquisa/>
            <BotaoAddPosts title='+' onPress={AddPost}/>
        </View>
    )
}
styles = StyleSheet.create({
    container:{
    }
})
export default TelaPosts;