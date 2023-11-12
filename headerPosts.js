import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from 'react-native'
import { useNavigation } from "@react-navigation/native";

function CabecarioPosts({onPress, title}){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <Pressable 
            style={styles.Button}
            onPress={()=>{navigation.goBack()}}
            >
                <Image source={require('../assets/flecha.png')}/>
            </Pressable>
            <View style={styles.nome}>
                <Text style={styles.texto}>AurorA</Text>
            </View>
            <View style={styles.perfil}>
                <Image source={require('../assets/perfil2.png')}/>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: '#2CB7E3',
        height: 120,
        width: 390,
        flexDirection: 'row',
        alignItems: 'center',
    },
    Button:{
        width: 58,
        height: 60,
        backgroundColor: '#2CB7E3',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 20,
        marginTop: 30,
        borderRadius: 30
    },
    nome:{
        marginLeft: '12%',
        textAlign: 'center',
        marginTop: 30
    },
    texto:{
        fontSize: 50,
    },
    perfil:{
        marginTop: 30,
        marginLeft: 40
    }

})
export default CabecarioPosts;