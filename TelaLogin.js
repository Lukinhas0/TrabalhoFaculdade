import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from 'react-native'
import EntradaDeDados from '../componentes/EntradaDeDados';
import BotaoPersonalizado from "../componentes/BotaoPersonalizado";
import Facebook from "../componentes/facebook";
import Googlo from "../componentes/google";
import Cabecario from "../componentes/header";
import { useNavigation} from '@react-navigation/native' 

 function TelaLogin(){
        const navigation = useNavigation()
        const [nome, setNome] = useState ('')
        const [senha, setSenha] = useState ('')
        const [sucesso, setSucesso]  = useState(false)

        function ValidaLogin(){
            if(nome=='Rod' && senha=='123'){
                setSucesso(true)
                navigation.navigate('TelaPosts')
            } 
            else{
                setSucesso(false)
                console.log('fracasso')
            }  
        }

    return(
        <View>
            <Cabecario/>
        <View style={styles.main}>
            <View style={styles.espacos}>
                <Image source={require('../assets/perfil.png')}/>
                <EntradaDeDados label='Nome' setFunction={(text)=>(setNome(text))}/>
                <EntradaDeDados label='Senha' setFunction={(text)=>(setSenha(text))}/>
                <Text>Esqueceu Sua Senha</Text>
                <BotaoPersonalizado title='Login' onPress={ValidaLogin}/>
            </View>
            <View style={styles.icons}>
                <Facebook/>
                <Googlo/>
            </View>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    main:{
        backgroundColor:'#35F8D7',
        height: '70%',
        width: 390,
        borderRadius: 40,
        marginTop: 110
    },
    espacos:{
        alignItems:'center',
        marginTop: 20,
    },
    icons:{
        flex: 'row',
        alignItems: 'center',
        margin: 10
    },
})
export default TelaLogin;